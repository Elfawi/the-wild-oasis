import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
export function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked Out`);
      // queryClient.invalidateQueries({ queryKey: ["booking"] });
      queryClient.invalidateQueries({ active: true }); // another way to invalidate queries
    },
    onError: () => {
      toast.error("There were an error while checking out");
    },
  });
  return { checkout, isCheckingOut };
}
