import { FlickeringGrid } from "@/components/FlickeringGridHero";

const LOGO_BASE64 =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0idXVpZC0wZWI0YjI0NS1jZjdjLTQwMzEtOWJlYy02MzFmZTdiNjM3OWMiIGRhdGEtbmFtZT0ia2F0bWFuIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE4NzYuMjkgMTg1Ny4wNSI+CiAgPHBhdGggZD0iTTEwMjUuMDcsNjYyLjg2Yy0zMC4zNC0xMy45Ni02NC45NSw4LjA2LTY0Ljk1LDQxLjQ1djE1NS4zNmMwLDI1LjIzLDIwLjQ2LDQ1LjY4LDQ1LjY5LDQ1LjY4bDE1MC42Ni0uMDJjMzIuNTEsMCw1NC44Ny0zMy4xMSw0Mi4yNi02My4wOC0xNi44MS0zOS45NS00MS40OS03Ny4zNi03NC4wMy0xMDkuOS0yOS43Mi0yOS43Mi02My41NC01Mi44OS05OS42My02OS41WiIgZmlsbD0iI2VjZWNlYyIvPgogIDxwYXRoIGQ9Ik05OTUuMjIsNDg2LjM3Yzg4LjQyLDIwLjU2LDE3Mi4zNSw2NS4zMSwyNDEuMjYsMTM0LjIxLDcwLjkyLDcwLjkyLDExNi4yNCwxNTcuNzUsMTM1Ljk0LDI0OC45OCw0LjUyLDIwLjkyLDIzLjE2LDM1Ljc2LDQ0LjU3LDM1Ljc2aDYzLjc4YzI4Ljg4LDAsNTAuMjgtMjYuNDEsNDQuNzgtNTQuNzYtMjQuMDctMTI0LjEzLTg0LjE3LTI0Mi42NS0xODAuMjgtMzM4Ljc3LTkzLjgzLTkzLjgzLTIwOS0xNTMuMzItMzI5Ljg3LTE3OC41Mi0yOC40OC01Ljk0LTU1LjI3LDE1LjYtNTUuMjcsNDQuNjl2NjRjMCwyMS4xNSwxNC41LDM5LjYzLDM1LjEsNDQuNDJaIiBmaWxsPSIjZWNlY2VjIi8+CiAgPHBhdGggZD0iTTE4NzUuOTQsODU0LjQzYy0yNS44OS0yMDkuMzctMTE5LjIxLTQxMS45NS0yNzkuOTYtNTcyLjdDMTQzMS45NiwxMTcuNzEsMTIyNC4zOSwyMy45LDEwMTAuNDkuMjhjLTI2LjkyLTIuOTctNTAuMzcsMTguMzctNTAuMzcsNDUuNDV2NzcuNzdjMCwyMi43MSwxNi42OSw0MS45LDM5LjE3LDQ1LjE4LDE2Ny44NCwyNC40OSwzMjkuNSwxMDEuMzIsNDU4LjY0LDIzMC40NiwxMzEuMTcsMTMxLjE3LDIwOC4zNywyOTUuOSwyMzEuNTYsNDY2LjYsMy4wOCwyMi42NywyMi4zNiwzOS42LDQ1LjI0LDM5LjZoOTUuODNjMjcuMywwLDQ4LjczLTIzLjgxLDQ1LjM4LTUwLjlaIiBmaWxsPSIjZWNlY2VjIi8+CiAgPHBhdGggZD0iTTE3MjQuMDQsMTAxNi45NWwtMTE5Ljc1LS4wOC0xMjQuMDEtLjExYy0yNC40My0uMDItNDUuNSwxNy40OC00OS41LDQxLjU4LTE4LjA3LDEwOC43Ny02OS4wMiwyMTMuMDktMTUyLjg4LDI5Ni45NC04NC45NCw4NC45NC0xOTAuODgsMTM2LjE1LTMwMS4xNiwxNTMuNTgtNDEuOCw2LjY0LTg0LjMsOC40Mi0xMjYuNSw1LjMxLTEyNi43NS05LjMtMjUwLjk0LTYyLjQyLTM0Ny45My0xNTkuNDEtOTQuNjctOTQuNjctMTQ3LjU0LTIxNS4yMy0xNTguNjgtMzM4LjgxLTMuOC00Mi4xMS0yLjc1LTg0LjU1LDMuMTctMTI2LjQ3LDE2LjAxLTExMy41Nyw2Ny42Ny0yMjMuMDUsMTU0Ljk2LTMxMC4zNCw4NS45OC04NS45OCwxOTMuNTEtMTM3LjM5LDMwNS4yNi0xNTQuMjEsMjQuMzgtMy42Nyw0Mi40My0yNC41Myw0Mi40MS00OS4xOWwtLjA5LTEyMy41My0uMDgtMTIwLjJjLS4wMi0yOS42Mi0yNS43My01Mi43MS01NS4xOC00OS41OS0xOTUuMDUsMjAuNzEtMzg0LjQ3LDEwNS43NS01MzMuODcsMjU1LjE2QzEwNi4yNCw0OTEuNTMsMjAuNiw2ODcuOTcsMy4yOSw4ODkuMjNjLTMuNjIsNDIuMDQtNC4yNiw4NC4zNi0xLjksMTI2LjQ3LDExLjcxLDIxMS4wOSw5OC4zLDQxOC45NCwyNTkuNjYsNTgwLjMsMTYzLjY5LDE2My42OSwzNzUuMTMsMjUwLjM3LDU4OS40MiwyNjAuMDksNDIuMTQsMS45Niw4NC40Ni45LDEyNi41LTMuMiwxOTguMDktMTkuMDksMzkwLjg4LTEwNC40LDU0Mi41MS0yNTYuMDQsMTQ2Ljk1LTE0Ni45NSwyMzEuNjQtMzMyLjY0LDI1NC4wOS01MjQuMjcsMy40Ny0yOS42LTE5LjczLTU1LjYzLTQ5LjUzLTU1LjY1WiIgZmlsbD0iI2VjZWNlYyIvPgo8L3N2Zz4=";

const maskStyle = {
  WebkitMaskImage: `url('${LOGO_BASE64}')`,
  WebkitMaskSize: "60vw",
  WebkitMaskPosition: "center",
  WebkitMaskRepeat: "no-repeat",
  maskImage: `url('${LOGO_BASE64}')`,
  maskSize: "60vw",
  maskPosition: "center",
  maskRepeat: "no-repeat",
} as const;

const GRID_CONFIG = {
  background: {
    color: "#0B90BA",
    maxOpacity: 0.4,
    flickerChance: 0.32,
    squareSize: 2,
    gridGap: 6,
  },
  logo: {
    color: "#21CAFF",
    maxOpacity: 0.85,
    flickerChance: 0.32,
    squareSize: 2,
    gridGap: 6,
  },
} as const;

const FlickeringGridBg = () => {
  return (
    <div className="overflow-hidden absolute -top-20 right-0 flex w-full h-screen justify-center items-center -z-50">
      <FlickeringGrid
        className={`absolute inset-0 z-0 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] motion-safe:animate-pulse`}
        {...GRID_CONFIG.background}
      />
      <div
        className="absolute inset-0 z-0 translate-y-[2vh] motion-safe:animate-fade-in"
        style={{
          ...maskStyle,
          animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      >
        <FlickeringGrid {...GRID_CONFIG.logo} />
      </div>
    </div>
  );
};

export { FlickeringGridBg };
