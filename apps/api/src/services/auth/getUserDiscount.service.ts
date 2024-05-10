import prisma from '@/prisma';

export const getUserDiscount = async () => {
  try {
    const idUser = 12;
    const userDiscount = await prisma.refferalHistory.findFirst({
      where: {
        userId: idUser,
      },
      include: {
        user: true,
      },
    });

    console.log(userDiscount);

    if (!userDiscount) {
      console.log(`Discount not found!`);
    }

    // const { discount_rate, userId, expiredAt } = userDiscount;

    // const isExpired = expiredAt < new Date();

    console.log(`${Number(userDiscount?.discount_rate) * 100}`);

    // return {
    //   message: 'User discount retrieved',
    //   data: {
    //     discount: isExpired ? 0 : discount_rate * 100, // Convert back to percentage
    //     // user: {
    //     //   id: idUser.id,
    //     //   username: user.username,
    //     //   email: user.email,
    //     // },
    //     expiredAt,
    //   },
    // };
  } catch (error) {
    console.log(error);
  }
};
