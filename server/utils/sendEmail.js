import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
    service: 'gmail',
    // host: "smtp.ethereal.email",
    // port: 587,
    //secure: false, // true for 465, false for other ports
    auth: {
        user: '18110318@student.hcmute.edu.vn',
        pass: '18110318',
    },
});

const mailOptions = (emailTo, createdOrder) => {
    let orderDetails = '<h4> Đơn hàng của bạn </h4><br></br>' +'Giỏ hàng: ';
    (createdOrder.orderItems).forEach(item => {
        orderDetails = orderDetails + item.name + '<br></br>'
    });
    orderDetails = orderDetails +'<p>Tổng tiền:' + (createdOrder.orderPrice + createdOrder.shippingPrice) + '</p><br></br>'
    return ({
        from: '18110318@student.hcmute.edu.vn',
        to: emailTo,
        subject: 'Sending Email using Node.js',
        html: '<h1 style={text-align:center}>Đặt hàng thành công tại TLCN-Bookstore</h1><br></br>' + orderDetails
    })
};

export const sendEmail = async (emailTo, createdOrder) => {
    await transporter.sendMail(mailOptions(emailTo, createdOrder), function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
