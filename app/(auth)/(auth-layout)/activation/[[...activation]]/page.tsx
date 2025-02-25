import ActivationForm from "@/components/auth/activation-form";
import ProtectedRoute from "@/context/ProtectedRoute";

export default function Page() {
  return (
    <ProtectedRoute authRequired={false}>
      <div className="w-full flex flex-col justify-center items-center">
        <ActivationForm />
      </div>
    </ProtectedRoute>
  );
}
