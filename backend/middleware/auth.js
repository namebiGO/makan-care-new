const { clerkClient } = require('@clerk/express');

const protect = async (req, res, next) => {
    try {
        // Get token from header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized, no token'
            });
        }

        const token = authHeader.split(' ')[1];

        // Verify Clerk session token
        const session = await clerkClient.verifyToken(token);

        if (!session) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized, invalid token'
            });
        }

        // Get user details from Clerk
        const user = await clerkClient.users.getUser(session.sub);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User not found'
            });
        }

        // Attach user info to request
        req.user = {
            id: user.id,
            email: user.emailAddresses[0]?.emailAddress,
            firstName: user.firstName,
            lastName: user.lastName
        };

        next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        return res.status(401).json({
            success: false,
            message: 'Not authorized, token verification failed'
        });
    }
};

module.exports = { protect };
