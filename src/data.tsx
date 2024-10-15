import {
  AIArchive,
  AIBlockQuote,
  AIBold,
  AIBook,
  AIBookmark,
  AIBulletList,
  AICalendar,
  AICalendarAdd,
  AICheck,
  AIClipBoard,
  AIClock,
  AICloud,
  AICode,
  AIDotsHorizontal,
  AIDotsVertical,
  AIDuplicate,
  AIEye,
  AIEyeOff,
  AIFile,
  AIFilter,
  AIFilter2,
  AIFolder,
  AIGrid,
  AIHeading,
  AIHeadPhone,
  AIHighLight,
  AIHome,
  AIIndentLeft,
  AIIndentRight,
  AIItalic,
  AIJustified,
  AILightning,
  AILink,
  AILink2,
  AILocation,
  AILocation2,
  AILock,
  AILogout,
  AIMenu,
  AIMoon,
  AIPaperClip,
  AIPencil,
  AIPilCrow,
  AIPin,
  AIReDo,
  AISearch,
  AISetting,
  AIStar,
  AIStars,
  AIStrikeThrough,
  AISun,
  AITextCentered,
  AITextLeft,
  AITextRight,
  AITrash,
  AIUnderline,
  AIUndo,
  AIBackspace,
  AICategory,
  AIChat,
  AIChevronsDown,
  AIChevronsLeft,
  AIChevronsRight,
  AIChevronsUp,
  AICoin,
  AINewFolder,
  AIPhone,
  AIPlus,
  AISubtract,
  AIUnlock,
  AIUser,
  AIUsers,
  AIWaterDrop,
  AICamera,
  AIDesktop,
  AIFastForward,
  AIImage,
  AILayout,
  AIMicroPhone,
  AIMobile,
  AIMusic,
  AIMusic2,
  AIPlay,
  AIRewind,
  AIRss,
  AISoundOff,
  AIStop,
  AITablet,
  AIVideo,
  AIVideoOff,
  AIPound,
  AIArrowDown,
  AIArrowLeft,
  AIArrowRight,
  AIArrowUp,
  AIAT,
  AIBank,
  AIBell,
  AIBuoy,
  AICart,
  AICreditCard,
  AIDollar,
  AIDownload,
  AIEmoji,
  AIEuro,
  AIFacebook,
  AIFlag,
  AIFullScreen,
  AIGift,
  AIHashTag,
  AIHeart,
  AIHelp,
  AIInbox,
  AIInformation,
  AIInstagram,
  AILinkedIn,
  AIMail,
  AIMessage,
  AIMessageRound,
  AIPieChart,
  AIPinterest,
  AIRedirect,
  AIRefresh,
  AISelector,
  AISend,
  AIShare,
  AISnapchat,
  AISpeaker,
  AISuccess,
  AITag,
  AIThumbDown,
  AIThumbUp,
  AITicket,
  AITikTok,
  AITwitter,
  AIUpload,
  AIVimeo,
  AIWhatsapp,
  AIYoutube,
  AIZoomIn,
  AISound,
  AIYen,
  AIWarning,
  AIRestrict,
  AIXmark,
} from "aveicon";
import { Tooltip } from "react-tooltip";

export const general = [
  {
    name: "menu",
    component: (
      <span data-tooltip-id="menu" data-tooltip-content="menu">
        <AIMenu />
        <Tooltip id="menu" />
      </span>
    ),
  },
  {
    name: "home",
    component: (
      <span data-tooltip-id="home" data-tooltip-content="home">
        <AIHome />
        <Tooltip id="home" />
      </span>
    ),
  },
  {
    name: "search",
    component: (
      <span data-tooltip-id="search" data-tooltip-content="search">
        <AISearch />
        <Tooltip id="search" />
      </span>
    ),
  },
  {
    name: "setting",
    component: (
      <span data-tooltip-id="setting" data-tooltip-content="setting">
        <AISetting />
        <Tooltip id="setting" />
      </span>
    ),
  },
  {
    name: "filter",
    component: (
      <span data-tooltip-id="filter" data-tooltip-content="filter">
        <AIFilter />
        <Tooltip id="filter" />
      </span>
    ),
  },
  {
    name: "filter2",
    component: (
      <span data-tooltip-id="filter2" data-tooltip-content="filter2">
        <AIFilter2 />
        <Tooltip id="filter2" />
      </span>
    ),
  },
  {
    name: "backspace",
    component: (
      <span data-tooltip-id="backspace" data-tooltip-content="Backspace">
        <AIBackspace />
        <Tooltip id="backspace" />
      </span>
    ),
  },
  {
    name: "bookmark",
    component: (
      <span data-tooltip-id="bookmark" data-tooltip-content="bookmark">
        <AIBookmark />
        <Tooltip id="bookmark" />
      </span>
    ),
  },
  {
    name: "book",
    component: (
      <span data-tooltip-id="book" data-tooltip-content="book">
        <AIBook />
        <Tooltip id="book" />
      </span>
    ),
  },
  {
    name: "category",
    component: (
      <span data-tooltip-id="category" data-tooltip-content="Category">
        <AICategory />
        <Tooltip id="category" />
      </span>
    ),
  },
  {
    name: "location",
    component: (
      <span data-tooltip-id="location" data-tooltip-content="location">
        <AILocation />
        <Tooltip id="location" />
      </span>
    ),
  },
  {
    name: "location2",
    component: (
      <span data-tooltip-id="location2" data-tooltip-content="location2">
        <AILocation2 />
        <Tooltip id="location2" />
      </span>
    ),
  },
  {
    name: "pin",
    component: (
      <span data-tooltip-id="pin" data-tooltip-content="pin">
        <AIPin />
        <Tooltip id="pin" />
      </span>
    ),
  },
  {
    name: "logout",
    component: (
      <span data-tooltip-id="logout" data-tooltip-content="logout">
        <AILogout />
        <Tooltip id="logout" />
      </span>
    ),
  },
  {
    name: "duplicate",
    component: (
      <span data-tooltip-id="duplicate" data-tooltip-content="duplicate">
        <AIDuplicate />
        <Tooltip id="duplicate" />
      </span>
    ),
  },
  {
    name: "grid",
    component: (
      <span data-tooltip-id="grid" data-tooltip-content="grid">
        <AIGrid />
        <Tooltip id="grid" />
      </span>
    ),
  },
  {
    name: "calendar",
    component: (
      <span data-tooltip-id="calendar" data-tooltip-content="calendar">
        <AICalendar />
        <Tooltip id="calendar" />
      </span>
    ),
  },
  {
    name: "calendar_add",
    component: (
      <span data-tooltip-id="calendar_add" data-tooltip-content="calendar add">
        <AICalendarAdd />
        <Tooltip id="calendar_add" />
      </span>
    ),
  },
  {
    name: "clock",
    component: (
      <span data-tooltip-id="clock" data-tooltip-content="clock">
        <AIClock />
        <Tooltip id="clock" />
      </span>
    ),
  },
  {
    name: "user",
    component: (
      <span data-tooltip-id="user" data-tooltip-content="user">
        <AIUser />
        <Tooltip id="user" />
      </span>
    ),
  },
  {
    name: "users",
    component: (
      <span data-tooltip-id="users" data-tooltip-content="users">
        <AIUsers />
        <Tooltip id="users" />
      </span>
    ),
  },
  {
    name: "lock",
    component: (
      <span data-tooltip-id="lock" data-tooltip-content="lock">
        <AILock />
        <Tooltip id="lock" />
      </span>
    ),
  },
  {
    name: "unlock",
    component: (
      <span data-tooltip-id="unlock" data-tooltip-content="unlock">
        <AIUnlock />
        <Tooltip id="unlock" />
      </span>
    ),
  },
  {
    name: "eye",
    component: (
      <span data-tooltip-id="eye" data-tooltip-content="eye">
        <AIEye />
        <Tooltip id="eye" />
      </span>
    ),
  },
  {
    name: "eye_off",
    component: (
      <span data-tooltip-id="eye_off" data-tooltip-content="eye off">
        <AIEyeOff />
        <Tooltip id="eye_off" />
      </span>
    ),
  },
  {
    name: "paper_clip",
    component: (
      <span data-tooltip-id="paper_clip" data-tooltip-content="paper clip">
        <AIPaperClip />
        <Tooltip id="paper_clip" />
      </span>
    ),
  },
  {
    name: "clipboard",
    component: (
      <span data-tooltip-id="clipboard" data-tooltip-content="clipboard">
        <AIClipBoard />
        <Tooltip id="clipboard" />
      </span>
    ),
  },
  {
    name: "folder",
    component: (
      <span data-tooltip-id="folder" data-tooltip-content="folder">
        <AIFolder />
        <Tooltip id="folder" />
      </span>
    ),
  },
  {
    name: "newFolder",
    component: (
      <span data-tooltip-id="newFolder" data-tooltip-content="New Folder">
        <AINewFolder />
        <Tooltip id="newFolder" />
      </span>
    ),
  },
  {
    name: "file",
    component: (
      <span data-tooltip-id="file" data-tooltip-content="file">
        <AIFile />
        <Tooltip id="file" />
      </span>
    ),
  },
  {
    name: "archive",
    component: (
      <span data-tooltip-id="archive" data-tooltip-content="archive">
        <AIArchive />
        <Tooltip id="archive" />
      </span>
    ),
  },
  {
    name: "sun",
    component: (
      <span data-tooltip-id="sun" data-tooltip-content="sun">
        <AISun />
        <Tooltip id="sun" />
      </span>
    ),
  },
  {
    name: "moon",
    component: (
      <span data-tooltip-id="moon" data-tooltip-content="moon">
        <AIMoon />
        <Tooltip id="moon" />
      </span>
    ),
  },
  {
    name: "cloud",
    component: (
      <span data-tooltip-id="cloud" data-tooltip-content="cloud">
        <AICloud />
        <Tooltip id="cloud" />
      </span>
    ),
  },
  {
    name: "water_drop",
    component: (
      <span data-tooltip-id="water_drop" data-tooltip-content="water drop">
        <AIWaterDrop />
        <Tooltip id="water_drop" />
      </span>
    ),
  },
  {
    name: "lightning",
    component: (
      <span data-tooltip-id="lightning" data-tooltip-content="lightning">
        <AILightning />
        <Tooltip id="lightning" />
      </span>
    ),
  },
  {
    name: "stars",
    component: (
      <span data-tooltip-id="stars" data-tooltip-content="stars">
        <AIStars />
        <Tooltip id="stars" />
      </span>
    ),
  },
];

export const editing = [
  {
    name: "justified",
    component: (
      <span data-tooltip-id="justified" data-tooltip-content="justified">
        <AIJustified />
        <Tooltip id="justified" />
      </span>
    ),
  },
  {
    name: "text_left",
    component: (
      <span data-tooltip-id="text_left" data-tooltip-content="text left">
        <AITextLeft />
        <Tooltip id="text_left" />
      </span>
    ),
  },
  {
    name: "text_right",
    component: (
      <span data-tooltip-id="text_right" data-tooltip-content="text right">
        <AITextRight />
        <Tooltip id="text_right" />
      </span>
    ),
  },
  {
    name: "text_centered",
    component: (
      <span
        data-tooltip-id="text_centered"
        data-tooltip-content="text centered"
      >
        <AITextCentered />
        <Tooltip id="text_centered" />
      </span>
    ),
  },
  {
    name: "indent_right",
    component: (
      <span data-tooltip-id="indent_right" data-tooltip-content="indent right">
        <AIIndentRight />
        <Tooltip id="indent_right" />
      </span>
    ),
  },
  {
    name: "indent_left",
    component: (
      <span data-tooltip-id="indent_left" data-tooltip-content="indent left">
        <AIIndentLeft />
        <Tooltip id="indent_left" />
      </span>
    ),
  },
  {
    name: "highlight",
    component: (
      <span data-tooltip-id="highlight" data-tooltip-content="highlight">
        <AIHighLight />
        <Tooltip id="highlight" />
      </span>
    ),
  },
  {
    name: "pilcrow",
    component: (
      <span data-tooltip-id="pilcrow" data-tooltip-content="pilcrow">
        <AIPilCrow />
        <Tooltip id="pilcrow" />
      </span>
    ),
  },
  {
    name: "bold",
    component: (
      <span data-tooltip-id="bold" data-tooltip-content="bold">
        <AIBold />
        <Tooltip id="bold" />
      </span>
    ),
  },
  {
    name: "heading",
    component: (
      <span data-tooltip-id="heading" data-tooltip-content="heading">
        <AIHeading />
        <Tooltip id="heading" />
      </span>
    ),
  },
  {
    name: "italic",
    component: (
      <span data-tooltip-id="italic" data-tooltip-content="italic">
        <AIItalic />
        <Tooltip id="italic" />
      </span>
    ),
  },
  {
    name: "underline",
    component: (
      <span data-tooltip-id="underline" data-tooltip-content="underline">
        <AIUnderline />
        <Tooltip id="underline" />
      </span>
    ),
  },
  {
    name: "strike_through",
    component: (
      <span
        data-tooltip-id="strike_through"
        data-tooltip-content="strike through"
      >
        <AIStrikeThrough />
        <Tooltip id="strike_through" />
      </span>
    ),
  },
  {
    name: "block_quote",
    component: (
      <span data-tooltip-id="block_quote" data-tooltip-content="block quote">
        <AIBlockQuote />
        <Tooltip id="block_quote" />
      </span>
    ),
  },
  {
    name: "bullet_list",
    component: (
      <span data-tooltip-id="bullet_list" data-tooltip-content="bullet list">
        <AIBulletList />
        <Tooltip id="bullet_list" />
      </span>
    ),
  },
  {
    name: "undo",
    component: (
      <span data-tooltip-id="undo" data-tooltip-content="undo">
        <AIUndo />
        <Tooltip id="undo" />
      </span>
    ),
  },
  {
    name: "redo",
    component: (
      <span data-tooltip-id="redo" data-tooltip-content="redo">
        <AIReDo />
        <Tooltip id="redo" />
      </span>
    ),
  },
  {
    name: "pencil",
    component: (
      <span data-tooltip-id="pencil" data-tooltip-content="pencil">
        <AIPencil />
        <Tooltip id="pencil" />
      </span>
    ),
  },
  {
    name: "dots_horizontal",
    component: (
      <span
        data-tooltip-id="dots_horizontal"
        data-tooltip-content="dots horizontal"
      >
        <AIDotsHorizontal />
        <Tooltip id="dots_horizontal" />
      </span>
    ),
  },
  {
    name: "dots_vertical",
    component: (
      <span
        data-tooltip-id="dots_vertical"
        data-tooltip-content="dots vertical"
      >
        <AIDotsVertical />
        <Tooltip id="dots_vertical" />
      </span>
    ),
  },
  {
    name: "trash",
    component: (
      <span data-tooltip-id="trash" data-tooltip-content="trash">
        <AITrash />
        <Tooltip id="trash" />
      </span>
    ),
  },
  {
    name: "restrict",
    component: (
      <span data-tooltip-id="restrict" data-tooltip-content="restrict">
        <AIRestrict />
        <Tooltip id="restrict" />
      </span>
    ),
  },
  {
    name: "link",
    component: (
      <span data-tooltip-id="link" data-tooltip-content="link">
        <AILink />
        <Tooltip id="link" />
      </span>
    ),
  },
  {
    name: "link2",
    component: (
      <span data-tooltip-id="link2" data-tooltip-content="link2">
        <AILink2 />
        <Tooltip id="link2" />
      </span>
    ),
  },
  {
    name: "code",
    component: (
      <span data-tooltip-id="code" data-tooltip-content="code">
        <AICode />
        <Tooltip id="code" />
      </span>
    ),
  },
  {
    name: "check",
    component: (
      <span data-tooltip-id="check" data-tooltip-content="check">
        <AICheck />
        <Tooltip id="check" />
      </span>
    ),
  },
  {
    name: "plus",
    component: (
      <span data-tooltip-id="plus" data-tooltip-content="Plus">
        <AIPlus />
        <Tooltip id="plus" />
      </span>
    ),
  },
  {
    name: "subtract",
    component: (
      <span data-tooltip-id="subtract" data-tooltip-content="subtract">
        <AISubtract />
        <Tooltip id="subtract" />
      </span>
    ),
  },
  {
    name: "x_mark",
    component: (
      <span data-tooltip-id="x_mark" data-tooltip-content="x mark">
        <AIXmark />
        <Tooltip id="x_mark" />
      </span>
    ),
  },
];

export const media = [
  {
    name: "image",
    component: (
      <span data-tooltip-id="image" data-tooltip-content="image">
        <AIImage />
        <Tooltip id="image" />
      </span>
    ),
  },
  {
    name: "camera",
    component: (
      <span data-tooltip-id="camera" data-tooltip-content="camera">
        <AICamera />
        <Tooltip id="camera" />
      </span>
    ),
  },
  {
    name: "video",
    component: (
      <span data-tooltip-id="video" data-tooltip-content="video">
        <AIVideo />
        <Tooltip id="video" />
      </span>
    ),
  },
  {
    name: "video_off",
    component: (
      <span data-tooltip-id="video_off" data-tooltip-content="video off">
        <AIVideoOff />
        <Tooltip id="video_off" />
      </span>
    ),
  },
  {
    name: "fast_forward",
    component: (
      <span data-tooltip-id="fast_forward" data-tooltip-content="fast forward">
        <AIFastForward />
        <Tooltip id="fast_forward" />
      </span>
    ),
  },
  {
    name: "rewind",
    component: (
      <span data-tooltip-id="rewind" data-tooltip-content="rewind">
        <AIRewind />
        <Tooltip id="rewind" />
      </span>
    ),
  },
  {
    name: "play",
    component: (
      <span data-tooltip-id="play" data-tooltip-content="play">
        <AIPlay />
        <Tooltip id="play" />
      </span>
    ),
  },
  {
    name: "stop",
    component: (
      <span data-tooltip-id="stop" data-tooltip-content="stop">
        <AIStop />
        <Tooltip id="stop" />
      </span>
    ),
  },
  {
    name: "sound",
    component: (
      <span data-tooltip-id="sound" data-tooltip-content="sound">
        <AISound />
        <Tooltip id="sound" />
      </span>
    ),
  },
  {
    name: "sound_off",
    component: (
      <span data-tooltip-id="sound_off" data-tooltip-content="sound off">
        <AISoundOff />
        <Tooltip id="sound_off" />
      </span>
    ),
  },
  {
    name: "music",
    component: (
      <span data-tooltip-id="music" data-tooltip-content="music">
        <AIMusic />
        <Tooltip id="music" />
      </span>
    ),
  },
  {
    name: "music2",
    component: (
      <span data-tooltip-id="music2" data-tooltip-content="music 2">
        <AIMusic2 />
        <Tooltip id="music2" />
      </span>
    ),
  },
  {
    name: "microphone",
    component: (
      <span data-tooltip-id="microphone" data-tooltip-content="microphone">
        <AIMicroPhone />
        <Tooltip id="microphone" />
      </span>
    ),
  },
  {
    name: "desktop",
    component: (
      <span data-tooltip-id="desktop" data-tooltip-content="desktop">
        <AIDesktop />
        <Tooltip id="desktop" />
      </span>
    ),
  },
  {
    name: "tablet",
    component: (
      <span data-tooltip-id="tablet" data-tooltip-content="tablet">
        <AITablet />
        <Tooltip id="tablet" />
      </span>
    ),
  },
  {
    name: "mobile",
    component: (
      <span data-tooltip-id="mobile" data-tooltip-content="mobile">
        <AIMobile />
        <Tooltip id="mobile" />
      </span>
    ),
  },
  {
    name: "layout",
    component: (
      <span data-tooltip-id="layout" data-tooltip-content="layout">
        <AILayout />
        <Tooltip id="layout" />
      </span>
    ),
  },
  {
    name: "rss",
    component: (
      <span data-tooltip-id="rss" data-tooltip-content="rss">
        <AIRss />
        <Tooltip id="rss" />
      </span>
    ),
  },
];

// arrows
export const arrows = [
  {
    name: "arrow_up",
    component: (
      <span data-tooltip-id="arrow_up" data-tooltip-content="arrow up">
        <AIArrowUp />
        <Tooltip id="arrow_up" />
      </span>
    ),
  },
  {
    name: "arrow_right",
    component: (
      <span data-tooltip-id="arrow_right" data-tooltip-content="arrow right">
        <AIArrowRight />
        <Tooltip id="arrow_right" />
      </span>
    ),
  },
  {
    name: "arrow_left",
    component: (
      <span data-tooltip-id="arrow_left" data-tooltip-content="arrow left">
        <AIArrowLeft />
        <Tooltip id="arrow_left" />
      </span>
    ),
  },
  {
    name: "arrow_down",
    component: (
      <span data-tooltip-id="arrow_down" data-tooltip-content="arrow down">
        <AIArrowDown />
        <Tooltip id="arrow_down" />
      </span>
    ),
  },
  {
    name: "chevronsDown",
    component: (
      <span data-tooltip-id="chevronsDown" data-tooltip-content="Chevrons Down">
        <AIChevronsDown />
        <Tooltip id="chevronsDown" />
      </span>
    ),
  },
  {
    name: "chevronsLeft",
    component: (
      <span data-tooltip-id="chevronsLeft" data-tooltip-content="Chevrons Left">
        <AIChevronsLeft />
        <Tooltip id="chevronsLeft" />
      </span>
    ),
  },
  {
    name: "chevronsUp",
    component: (
      <span data-tooltip-id="chevronsUp" data-tooltip-content="Chevrons Up">
        <AIChevronsUp />
        <Tooltip id="chevronsUp" />
      </span>
    ),
  },
  {
    name: "chevronsRight",
    component: (
      <span
        data-tooltip-id="chevronsRight"
        data-tooltip-content="Chevrons Right"
      >
        <AIChevronsRight />
        <Tooltip id="chevronsRight" />
      </span>
    ),
  },
  {
    name: "zoom_in",
    component: (
      <span data-tooltip-id="zoom_in" data-tooltip-content="zoom in">
        <AIZoomIn />
        <Tooltip id="zoom_in" />
      </span>
    ),
  },
  {
    name: "full_screen",
    component: (
      <span data-tooltip-id="full_screen" data-tooltip-content="full screen">
        <AIFullScreen />
        <Tooltip id="full_screen" />
      </span>
    ),
  },
  {
    name: "refresh",
    component: (
      <span data-tooltip-id="refresh" data-tooltip-content="refresh">
        <AIRefresh />
        <Tooltip id="refresh" />
      </span>
    ),
  },
  {
    name: "redirect",
    component: (
      <span data-tooltip-id="redirect" data-tooltip-content="redirect">
        <AIRedirect />
        <Tooltip id="redirect" />
      </span>
    ),
  },
  {
    name: "download",
    component: (
      <span data-tooltip-id="download" data-tooltip-content="download">
        <AIDownload />
        <Tooltip id="download" />
      </span>
    ),
  },
  {
    name: "upload",
    component: (
      <span data-tooltip-id="upload" data-tooltip-content="upload">
        <AIUpload />
        <Tooltip id="upload" />
      </span>
    ),
  },
  {
    name: "selector",
    component: (
      <span data-tooltip-id="selector" data-tooltip-content="selector">
        <AISelector />
        <Tooltip id="selector" />
      </span>
    ),
  },
];

// communication
export const communication = [
  {
    name: "send",
    component: (
      <span data-tooltip-id="send" data-tooltip-content="send">
        <AISend />
        <Tooltip id="send" />
      </span>
    ),
  },
  {
    name: "mail",
    component: (
      <span data-tooltip-id="mail" data-tooltip-content="mail">
        <AIMail />
        <Tooltip id="mail" />
      </span>
    ),
  },
  {
    name: "inbox",
    component: (
      <span data-tooltip-id="inbox" data-tooltip-content="inbox">
        <AIInbox />
        <Tooltip id="inbox" />
      </span>
    ),
  },
  {
    name: "phone",
    component: (
      <span data-tooltip-id="phone" data-tooltip-content="Phone">
        <AIPhone />
        <Tooltip id="phone" />
      </span>
    ),
  },
  {
    name: "speaker",
    component: (
      <span data-tooltip-id="speaker" data-tooltip-content="speaker">
        <AISpeaker />
        <Tooltip id="speaker" />
      </span>
    ),
  },
  {
    name: "message",
    component: (
      <span data-tooltip-id="message" data-tooltip-content="message">
        <AIMessage />
        <Tooltip id="message" />
      </span>
    ),
  },
  {
    name: "message_round",
    component: (
      <span
        data-tooltip-id="message_round"
        data-tooltip-content="message round"
      >
        <AIMessageRound />
        <Tooltip id="message_round" />
      </span>
    ),
  },
  {
    name: "chat",
    component: (
      <span data-tooltip-id="chat" data-tooltip-content="Chat">
        <AIChat />
        <Tooltip id="chat" />
      </span>
    ),
  },
  {
    name: "head_phone",
    component: (
      <span data-tooltip-id="head_phone" data-tooltip-content="head phone">
        <AIHeadPhone />
        <Tooltip id="head_phone" />
      </span>
    ),
  },
  {
    name: "buoy",
    component: (
      <span data-tooltip-id="buoy" data-tooltip-content="buoy">
        <AIBuoy />
        <Tooltip id="buoy" />
      </span>
    ),
  },
];

// social
export const social = [
  {
    name: "share",
    component: (
      <span data-tooltip-id="share" data-tooltip-content="share">
        <AIShare />
        <Tooltip id="share" />
      </span>
    ),
  },
  {
    name: "at",
    component: (
      <span data-tooltip-id="at" data-tooltip-content="at">
        <AIAT />
        <Tooltip id="at" />
      </span>
    ),
  },
  {
    name: "hashtag",
    component: (
      <span data-tooltip-id="hashtag" data-tooltip-content="hashtag">
        <AIHashTag />
        <Tooltip id="hashtag" />
      </span>
    ),
  },
  {
    name: "thumb_up",
    component: (
      <span data-tooltip-id="thumb_up" data-tooltip-content="thumb up">
        <AIThumbUp />
        <Tooltip id="thumb_up" />
      </span>
    ),
  },
  {
    name: "thumb_down",
    component: (
      <span data-tooltip-id="thumb_down" data-tooltip-content="thumb down">
        <AIThumbDown />
        <Tooltip id="thumb_down" />
      </span>
    ),
  },
  {
    name: "heart",
    component: (
      <span data-tooltip-id="heart" data-tooltip-content="heart">
        <AIHeart />
        <Tooltip id="heart" />
      </span>
    ),
  },
  {
    name: "star",
    component: (
      <span data-tooltip-id="star" data-tooltip-content="star">
        <AIStar />
        <Tooltip id="star" />
      </span>
    ),
  },
  {
    name: "emoji",
    component: (
      <span data-tooltip-id="emoji" data-tooltip-content="emoji">
        <AIEmoji />
        <Tooltip id="emoji" />
      </span>
    ),
  },
  {
    name: "facebook",
    component: (
      <span data-tooltip-id="facebook" data-tooltip-content="facebook">
        <AIFacebook />
        <Tooltip id="facebook" />
      </span>
    ),
  },
  {
    name: "instagram",
    component: (
      <span data-tooltip-id="instagram" data-tooltip-content="instagram">
        <AIInstagram />
        <Tooltip id="instagram" />
      </span>
    ),
  },
  {
    name: "twitter",
    component: (
      <span data-tooltip-id="twitter" data-tooltip-content="twitter">
        <AITwitter />
        <Tooltip id="twitter" />
      </span>
    ),
  },
  {
    name: "linkedin",
    component: (
      <span data-tooltip-id="linkedin" data-tooltip-content="linkedin">
        <AILinkedIn />
        <Tooltip id="linkedin" />
      </span>
    ),
  },
  {
    name: "youtube",
    component: (
      <span data-tooltip-id="youtube" data-tooltip-content="youtube">
        <AIYoutube />
        <Tooltip id="youtube" />
      </span>
    ),
  },
  {
    name: "tiktok",
    component: (
      <span data-tooltip-id="tiktok" data-tooltip-content="tiktok">
        <AITikTok />
        <Tooltip id="tiktok" />
      </span>
    ),
  },
  {
    name: "vimeo",
    component: (
      <span data-tooltip-id="vimeo" data-tooltip-content="vimeo">
        <AIVimeo />
        <Tooltip id="vimeo" />
      </span>
    ),
  },
  {
    name: "snapchat",
    component: (
      <span data-tooltip-id="snapchat" data-tooltip-content="snapchat">
        <AISnapchat />
        <Tooltip id="snapchat" />
      </span>
    ),
  },
  {
    name: "whatsapp",
    component: (
      <span data-tooltip-id="whatsapp" data-tooltip-content="whatsapp">
        <AIWhatsapp />
        <Tooltip id="whatsapp" />
      </span>
    ),
  },
  {
    name: "pinterest",
    component: (
      <span data-tooltip-id="pinterest" data-tooltip-content="pinterest">
        <AIPinterest />
        <Tooltip id="pinterest" />
      </span>
    ),
  },
];

// notifications
export const notifications = [
  {
    name: "bell",
    component: (
      <span data-tooltip-id="bell" data-tooltip-content="bell">
        <AIBell />
        <Tooltip id="bell" />
      </span>
    ),
  },
  {
    name: "flag",
    component: (
      <span data-tooltip-id="flag" data-tooltip-content="flag">
        <AIFlag />
        <Tooltip id="flag" />
      </span>
    ),
  },
  {
    name: "information",
    component: (
      <span data-tooltip-id="information" data-tooltip-content="information">
        <AIInformation />
        <Tooltip id="information" />
      </span>
    ),
  },
  {
    name: "help",
    component: (
      <span data-tooltip-id="help" data-tooltip-content="help">
        <AIHelp />
        <Tooltip id="help" />
      </span>
    ),
  },
  {
    name: "warning",
    component: (
      <span data-tooltip-id="warning" data-tooltip-content="warning">
        <AIWarning />
        <Tooltip id="warning" />
      </span>
    ),
  },
  {
    name: "success",
    component: (
      <span data-tooltip-id="success" data-tooltip-content="success">
        <AISuccess />
        <Tooltip id="success" />
      </span>
    ),
  },
];

// finance
export const finance = [
  {
    name: "bank",
    component: (
      <span data-tooltip-id="bank" data-tooltip-content="bank">
        <AIBank />
        <Tooltip id="bank" />
      </span>
    ),
  },
  {
    name: "coin",
    component: (
      <span data-tooltip-id="coin" data-tooltip-content="Coin">
        <AICoin />
        <Tooltip id="coin" />
      </span>
    ),
  },
  {
    name: "tag",
    component: (
      <span data-tooltip-id="tag" data-tooltip-content="tag">
        <AITag />
        <Tooltip id="tag" />
      </span>
    ),
  },
  {
    name: "cart",
    component: (
      <span data-tooltip-id="cart" data-tooltip-content="cart">
        <AICart />
        <Tooltip id="cart" />
      </span>
    ),
  },
  {
    name: "credit_card",
    component: (
      <span data-tooltip-id="credit_card" data-tooltip-content="credit card">
        <AICreditCard />
        <Tooltip id="credit_card" />
      </span>
    ),
  },
  {
    name: "gift",
    component: (
      <span data-tooltip-id="gift" data-tooltip-content="gift">
        <AIGift />
        <Tooltip id="gift" />
      </span>
    ),
  },
  {
    name: "ticket",
    component: (
      <span data-tooltip-id="ticket" data-tooltip-content="ticket">
        <AITicket />
        <Tooltip id="ticket" />
      </span>
    ),
  },
  {
    name: "pie_chart",
    component: (
      <span data-tooltip-id="pie_chart" data-tooltip-content="pie chart">
        <AIPieChart />
        <Tooltip id="pie_chart" />
      </span>
    ),
  },
  {
    name: "dollar",
    component: (
      <span data-tooltip-id="dollar" data-tooltip-content="dollar">
        <AIDollar />
        <Tooltip id="dollar" />
      </span>
    ),
  },
  {
    name: "euro",
    component: (
      <span data-tooltip-id="euro" data-tooltip-content="euro">
        <AIEuro />
        <Tooltip id="euro" />
      </span>
    ),
  },
  {
    name: "yen",
    component: (
      <span data-tooltip-id="yen" data-tooltip-content="yen">
        <AIYen />
        <Tooltip id="yen" />
      </span>
    ),
  },
  {
    name: "pound",
    component: (
      <span data-tooltip-id="pound" data-tooltip-content="pound">
        <AIPound />
        <Tooltip id="pound" />
      </span>
    ),
  },
];
