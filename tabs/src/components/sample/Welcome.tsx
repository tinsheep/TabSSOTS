import { useContext, useState } from "react";
import { Image, Menu } from "@fluentui/react-northstar";
import "./Welcome.css";
import { EditCode } from "./EditCode";
import { AzureFunctions } from "./AzureFunctions";
import { Graph } from "./Graph";
import { CurrentUser } from "./CurrentUser";
import { useData } from "@microsoft/teamsfx-react";
import { Deploy } from "./Deploy";
import { Publish } from "./Publish";
import { TeamsFxContext } from "../Context";
import CaptureVideoDesktop from "./CaptureVideoDesktop";
import CaptureAudioDesktop from "./CaptureAudioDesktop";
import { Grid, Segment } from '@fluentui/react-northstar'

export function Welcome(props: { showFunction?: boolean; environment?: string }) {
  const { showFunction, environment } = {
    showFunction: true,
    environment: window.location.hostname === "localhost" ? "local" : "azure",
    ...props,
  };
  const friendlyEnvironmentName =
    {
      local: "local environment",
      azure: "Azure environment",
    }[environment] || "local environment";

  const steps = ["local", "azure", "publish"];
  const friendlyStepsName: { [key: string]: string } = {
    local: "1. Build your app locally",
    azure: "2. Provision and Deploy to the Cloud",
    publish: "3. Publish to Teams",
  };
  const [selectedMenuItem, setSelectedMenuItem] = useState("local");
  const items = steps.map((step) => {
    return {
      key: step,
      content: friendlyStepsName[step] || "",
      onClick: () => setSelectedMenuItem(step),
    };
  });

  const { teamsfx } = useContext(TeamsFxContext);
  const { loading, data, error } = useData(async () => {
    if (teamsfx) {
      const userInfo = await teamsfx.getUserInfo();
      return userInfo;
    }
  });
  const userName = (loading || error) ? "": data!.displayName;
  return (
    <div className="welcome page">
      <div className="narrow page-padding">
        <Image src="hello.png" />
        <h1 className="center">Congratulations{userName ? ", " + userName : ""}!</h1>
        <p className="center">Your app is running in your {friendlyEnvironmentName}</p>
        <Menu defaultActiveIndex={0} items={items} underlined secondary />
        <div className="sections">
          {selectedMenuItem === "local" && (
            <div>
              <EditCode showFunction={showFunction} />
              <CurrentUser userName={userName} />
              <Grid columns={1}>
                <Segment
                /* Component to capture audio in web browser */
                  content={<CaptureAudioDesktop />}
                />
                <Segment
                /* Component to capture video in web browser */
                  content={<CaptureVideoDesktop />}
                />
              </Grid>
              
              <Graph />
              {showFunction && <AzureFunctions />}
            </div>
          )}
          {selectedMenuItem === "azure" && (
            <div>
              <Deploy />
            </div>
          )}
          {selectedMenuItem === "publish" && (
            <div>
              <Publish />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
