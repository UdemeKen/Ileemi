import SignupForm from "@/components/auth/signup-form";
import ProtectedRoute from "@/context/ProtectedRoute";

export default function Page() {
  return (
    <ProtectedRoute>
      <div className="w-full flex flex-col justify-center items-center">
        <SignupForm />
      </div>
    </ProtectedRoute>
  );
}