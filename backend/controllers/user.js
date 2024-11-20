const OTP = require("../models/otp.model");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

// const sendOtp = async (req, res) => {
//   const { email } = req.body;

//   try {
//   if(await User.findOne({ email: email })) {
//     return res.status(400).json("Email Already Registerd");
//   }
  
//     let otp = Math.floor(1000 + Math.random() * 9000);
//     const uniqueOtp = await OTP.findOne();
//     while (uniqueOtp) {
//       otp = Math.floor(1000 + Math.random() * 9000);
//     }

//     await OTP.create({
//       email,
//       otp,
//     });

//     res.status(200).json("otp send");
//   } catch (error) {
//     res.status(500).json({ message: error.message || "Internal Server Error" });
//   }
// };

const signUp = async (req, res) => {
  const { userName, email, password } = req.body;

  if(await User.findOne({ email: email })) {
    return res.status(400).json("Email Already Registerd");
  }
  var hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ userName, email, password: hashedPassword });

  try {
    await user.save();

    res.status(200).json({ mesaage: "User created", user });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { email, password, type } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    if (type !== user.type) {
      return res.status(400).json(`You are not a ${type}`);
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    
    res.status(200).json({ mesaage: "User login", user });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { signUp, login };

// const sendOtp = async (req, res) => {
//   const { email } = req.body;

//   try {
//   if(await User.findOne({ email: email })) {
//     return res.status(400).json("Email Already Registerd");
//   }
  
//     let otp = Math.floor(1000 + Math.random() * 9000);
//     const uniqueOtp = await OTP.findOne();
//     while (uniqueOtp) {
//       otp = Math.floor(1000 + Math.random() * 9000);
//     }

//     await OTP.create({
//       email,
//       otp,
//     });

//     res.status(200).json("otp send");
//   } catch (error) {
//     res.status(500).json({ message: error.message || "Internal Server Error" });
//   }
// };

// const signUp = async (req, res) => {
//   const { userName, email, password, otp } = req.body;

//   const dbOtp = await OTP.findOne({ email: email }).sort({ createdAt: -1 });
//   // console.log(dbOtp)
//   if (dbOtp.otp != otp) {
//     return res.status(400).json({ message: "Invalid OTP" });
//   }

//   var hashedPassword = await bcrypt.hash(password, 10);

//   const user = new User({ userName, email, password: hashedPassword });

//   try {
//     await user.save();

//     res.status(200).json({ mesaage: "User created", user });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email: email });
//     if (!user) {
//       return res.status(404).json({ message: "Invalid credentials" });
//     }

//     const isValid = await bcrypt.compare(password, user.password);
//     if (!isValid) {
//       return res.status(404).json({ message: "Invalid credentials" });
//     }

//     res.status(200).json({ mesaage: "User login", user });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// module.exports = { signUp, sendOtp, login };
