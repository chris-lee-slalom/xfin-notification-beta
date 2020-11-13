import {
    addComponent,
    SitecoreIcon,
    CommonFieldTypes,
} from "@sitecore-jss/sitecore-jss-manifest"

export default manifest => {
    addComponent(manifest, {
        name: "xfinnotify",
        icon: SitecoreIcon.Antenna,
        displayName: "XFINITY Notification",
        fields: [{ name: "XFINHeading", type: CommonFieldTypes.SingleLineText }],
        placeholders: ["jss-main"]
    })
}