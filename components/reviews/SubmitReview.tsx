"use client";
import { useState } from "react";
import { SubmitButton } from "../form/Buttons";
import FormContainer from "../form/FormContainer";
import { Card } from "../ui/card";
import RatingInput from "./RatingInput";
import TextAreaInput from "../form/TextAreaInput";
import { Button } from "@/components/ui/button";
import { createReviewAction } from "@/utils/action";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const SubmitReview = ({ productId }: { productId: string }) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  return (
    <div>
      <Button
        size="lg"
        className="capitalize"
        onClick={() => setIsReviewFormVisible((prev) => !prev)}
      >
        leave review
      </Button>
      {isReviewFormVisible && (
        <Card className="p-8 mt-8">
          <FormContainer
            action={async (prevState, formData) => {
              const result = await createReviewAction(prevState, formData);

              if (result.success) {
                router.push(`/products/${productId}`);
              }

              return result;
            }}
          >
            <input type="hidden" name="productId" value={productId} />
            <input
              type="text"
              name="authorName"
              value={user?.firstName || "user"}
            />
            <input type="hidden" name="authorImageUrl" value={user?.imageUrl} />
            <RatingInput name="rating" labelText="Rating" />
            <TextAreaInput
              name="comment"
              labelText="feedback"
              defaultValue="Outstanding product!!!"
            />
            <SubmitButton className="mt-4" />
          </FormContainer>
        </Card>
      )}
    </div>
  );
};
export default SubmitReview;
