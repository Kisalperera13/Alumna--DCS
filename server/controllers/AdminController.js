const AdminService = require('../services/AdminService');

class AdminController {
  // Create a new admin (adminData = whole data set)
  async createAdmin(req, res) {
    try {
      const adminData = req.body;
      const admin = await AdminService.createAdmin(adminData);
      res.status(201).json(admin);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating admin' });
    }
  }

  // Authenticate an admin
  async authenticateAdmin(req, res) {
    const { username, password } = req.body;

    try {
      const admin = await AdminService.authenticateAdmin(username, password);
      if (!admin) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      const token = AdminService.generateAdminAuthToken(admin);
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error authenticating admin' });
    }
  }

  // Delete an admin
  async deleteAdmin(req, res) {
    const adminId = req.params.id;

    try {
      const deletedAdmin = await AdminService.deleteAdmin(adminId);
      if (!deletedAdmin) {
        return res.status(404).json({ message: 'Admin not found' });
      }

      res.json({ message: 'Admin deleted successfully', admin: deletedAdmin });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting admin' });
    }
  }

  // Other methods for admin-related operations
}

module.exports = new AdminController();
