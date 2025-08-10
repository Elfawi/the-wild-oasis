import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
export function useEditBooking() {
  const queryClient = useQueryClient();
  const { mutate: editBooking, isLoading: isEditing } = useMutation({
    mutationFn: ({ bookingId, ...booking }) =>
      updateBooking(bookingId, {
        ...booking,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully edited`);
      // queryClient.invalidateQueries({ queryKey: ["booking"] });
      queryClient.invalidateQueries({ active: true }); // another way to invalidate queries
    },
    onError: () => {
      toast.error("There were an error while Editing the Booking");
    },
  });
  return { editBooking, isEditing };
}
