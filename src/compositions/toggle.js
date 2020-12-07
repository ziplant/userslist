import { ref } from "vue";

export default function useToggle() {
  const isToggleOpen = ref(false);

  const openToggle = () => {
    isToggleOpen.value = true;
  };

  const closeToggle = () => {
    isToggleOpen.value = false;
  };

  const swapToggle = () => {
    isToggleOpen.value = !isToggleOpen.value;
  };

  return {
    isToggleOpen,
    openToggle,
    closeToggle,
    swapToggle,
  };
}