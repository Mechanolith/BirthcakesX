import { withConfig } from "../../common/AWS/Lambda/hocs/withConfig";
import { withGenericErrorResponse } from "../../common/AWS/Lambda/hocs/withGenericErrorResponse";
import { withMethodGuard } from "../../common/AWS/Lambda/hocs/withMethodGuard";
import { success } from "../../common/AWS/Lambda/responses/success";

export const handler = withMethodGuard(
    withConfig(
        withGenericErrorResponse(async (event, context) => {
            const { config, ...rest } = context;
            return success({
                welcomeMessage: `${config.welcomeMessage}`,
                event,
                context: rest,
            });
        }),
    ),
    "GET",
);
