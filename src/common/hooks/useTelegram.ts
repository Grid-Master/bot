//@ts-ignore
const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    tg.close();
  };

  return {
    onClose,
    user: tg.initDataUnsafe?.user,
    tg,
  };
};
