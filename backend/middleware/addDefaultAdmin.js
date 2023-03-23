const AdminMd = require('../models/admin')

module.exports.createDefaultAdmin = async () => {
  try {
    const adminCount = await AdminMd.countDocuments()
    if (adminCount === 0) {
      const defaultAdmin = new AdminMd({
        username: 'admin',
        password: 'admin',
        name: 'admin',
        role: 'admin',
      })
      await AdminMd.register(defaultAdmin, 'admin')
      console.log('Default admin user created successfully!')
    }
  } catch (error) {
    console.error(error)
  }
}
