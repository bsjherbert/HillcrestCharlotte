const seedData = [
    {
        weekNum: 1, 
        dailyVerses: [
            "Genesis 1-2",
            "Genesis 3-4",
            "Genesis 6-7",
            "Genesis 8-9",
            "Job 1-2"],
        memoryVerses: [
            "Genesis 1:27",
            "Hebrews 11:7"]
    },
    {
        weekNum: 2, 
        dailyVerses: [
            "Job 38-39",
            "Job 40-42",
            "Genesis 11-12",
            "Genesis 15",
            "Genesis 16-17"],
        memoryVerses: [
            "Hebrews 11:6",
            "Hebrews 11:8-10"]
    },
    {
        weekNum: 3, 
        dailyVerses: [
            "Genesis 18-19",
            "Genesis 20-21",
            "Genesis 22",
            "Genesis 24",
            "Genesis 25:19-34, 26"],
        memoryVerses: [
            "Romans 4:20-22",
            "Hebrews 11:17-19"]
    },
    {
        weekNum: 4, 
        dailyVerses: [
            "Genesis 27-28",
            "Genesis 29-30:24",
            "Genesis 31-32",
            "Genesis 33, 35",
            "Genesis 37"],
        memoryVerses: [
            "2 Corinthians 10:12",
            "1 John 3:18"]
    },
    {
        weekNum: 5, 
        dailyVerses: [
            "Genesis 39-40",
            "Genesis 41",
            "Genesis 42-43",
            "Genesis 44-45",
            "Genesis 46-47"],
        memoryVerses: [
            "Romans 8:28-30",
            "Ephesians 3:20-21"]
    },
    {
        weekNum: 6, 
        dailyVerses: [
            "Genesis 48-49",
            "Genesis 50 – Exodus 1",
            "Exodus 2-3",
            "Exodus 4-5",
            "Exodus 6-7"],
        memoryVerses: [
            "Genesis 50:20",
            "Hebrews 11:24-26"]
    },
    {
        weekNum: 7, 
        dailyVerses: [
            "Exodus 8-9",
            "Exodus 10-11",
            "Exodus 12",
            "Exodus 13:17-14",
            "Exodus 16-17"],
        memoryVerses: [
            "John 1:29",
            "Hebrews 9:22"]
    },
    {
        weekNum: 8, 
        dailyVerses: [
            "Exodus 19-20",
            "Exodus 24-25",
            "Exodus 26-27",
            "Exodus 28-29",
            "Exodus 30-31"],
        memoryVerses: [
            "Exodus 20:1-3",
            "Galatians 5:14"]
    },
    {
        weekNum: 9, 
        dailyVerses: [
            "Exodus 32-33",
            "Exodus 34-36:1",
            "Exodus 40",
            "Leviticus 8-9",
            "Leviticus 16-17"],
        memoryVerses: [
            "Exodus 33:16",
            "Matthew 22:37-39"]
    },
    {
        weekNum: 10, 
        dailyVerses: [
            "Leviticus 23",
            "Leviticus 26",
            "Numbers 11-12",
            "Numbers 13-14",
            "Numbers 16-17"],
        memoryVerses: [
            "Leviticus 26:13",
            "Deuteronomy 31:7-8"]
    },
    {
        weekNum: 11, 
        dailyVerses: [
            "Numbers 20, 27:12-23",
            "Numbers 34-35",
            "Deuteronomy 1-2",
            "Deuteronomy 3-4",
            "Deuteronomy 6-7"],
        memoryVerses: [
            "Deuteronomy 4:7",
            "Deuteronomy 6:4-9"]
    },
    {
        weekNum: 12, 
        dailyVerses: [
            "Deuteronomy 8-9",
            "Deuteronomy 30-31",
            "Deuteronomy 32:48-52, 34",
            "Joshua 1-2",
            "Joshua 3-4"],
        memoryVerses: [
            "Joshua 1:8-9",
            "Psalm 1:1-2"]
    },
    {
        weekNum: 13, 
        dailyVerses: [
            "Joshua 5:10-15, 6",
            "Joshua 7-8",
            "Joshua 23-24",
            "Judges 2-3",
            "Judges 4"],
        memoryVerses: [
            "Joshua 24:14-15",
            "Judges 2:12"]
    },
    {
        weekNum: 14, 
        dailyVerses: [
            "Judges 6-7",
            "Judges 13-14",
            "Judges 15-16",
            "Ruth 1-2",
            "Ruth 3-4"],
        memoryVerses: [
            "Psalm 19:14",
            "Galatians 4:4-5"]
    },
    {
        weekNum: 15, 
        dailyVerses: [
            "1 Samuel 1-2",
            "1 Samuel 3, 8",
            "1 Samuel 9-10",
            "1 Samuel 13-14",
            "1 Samuel 15-16"],
        memoryVerses: [
            "1 Samuel 15:22",
            "1 Samuel 16:7"]
    },
    {
        weekNum: 16, 
        dailyVerses: [
            "1 Samuel 17-18",
            "1 Samuel 19-20",
            "1 Samuel 21-22",
            "Psalm 22, 1 Samuel 24-25:1",
            "1 Samuel 28; 31"],
        memoryVerses: [
            "1 Samuel 17:46-47",
            "2 Timothy 4:17a"]
    },
    {
        weekNum: 17, 
        dailyVerses: [
            "2 Samuel 1, 2:1-7",
            "2 Samuel 3:1, 5, Psalm 23",
            "2 Samuel 6-7",
            "Psalm 18, 2 Samuel 9",
            "2 Samuel 11-12"],
        memoryVerses: [
            "Psalm 23:1-3",
            "Psalm 51:10-13"]
    },
    {
        weekNum: 18, 
        dailyVerses: [
            "Psalm 51",
            "2 Samuel 24, Psalm 24",
            "Psalms 1, 19",
            "Psalms 103, 119:1-48",
            "Psalms 119:49-128"],
        memoryVerses: [
            "Psalm 1:1-7",
            "Psalm 119:7-11"]
    },
    {
        weekNum: 19, 
        dailyVerses: [
            "Psalms 119:129-176, 139",
            "Psalms 148-150",
            "1 Kings 2",
            "1 Kings 3, 6",
            "1 Kings 8, 9:1-9"],
        memoryVerses: [
            "Psalm 139:1-3",
            "Psalm 139:15-16"]
    },
    {
        weekNum: 20, 
        dailyVerses: [
            "Proverbs 1-2",
            "Proverbs 3-4",
            "Proverbs 16-18",
            "Proverbs 31",
            "1 Kings 11-12"],
        memoryVerses: [
            "Proverbs 1:7",
            "Proverbs 3:5-6"]
    },
    {
        weekNum: 21, 
        dailyVerses: [
            "1 Kings 16:29-34, 17",
            "1 Kings 18-19",
            "1 Kings 21-22",
            "2 Kings 2",
            "2 Kings 5, 6:1-23"],
        memoryVerses: [
            "Psalm 17:15",
            "Psalm 63:1"]
    },
    {
        weekNum: 22, 
        dailyVerses: [
            "Jonah 1-2",
            "Jonah 3-4",
            "Hosea 1-3",
            "Amos 1:1, 9",
            "Joel 1-3"],
        memoryVerses: [
            "Psalm 16:11",
            "John 11:25-26"]
    },
    {
        weekNum: 23, 
        dailyVerses: [
            "Isaiah 6, 9",
            "Isaiah 44-45",
            "Isaiah 52-53",
            "Isaiah 65-66",
            "Micah 1, 4:6-13, 5"],
        memoryVerses: [
            "Isaiah 53:5-6",
            "1 Peter 2:23-24"]
    },
    {
        weekNum: 24, 
        dailyVerses: [
            "2 Kings 17-18",
            "2 Kings 19-21",
            "2 Kings 22-23",
            "Jeremiah 1-3:5",
            "Jeremiah 25, 29"],
        memoryVerses: [
            "Proverbs 29:18",
            "Jeremiah 1:15"]
    },
    {
        weekNum: 25, 
        dailyVerses: [
            "Jeremiah 31:31-40, 32-33",
            "Jeremiah 52, 2 Kings 24-25",
            "Ezekiel 1:1-3, 36:16-38, 37",
            "Daniel 1-2",
            "Daniel 3-4"],
        memoryVerses: [
            "Ezekiel 36:26-27",
            "Daniel 4:35"]
    },
    {
        weekNum: 26, 
        dailyVerses: [
            "Daniel 5-6",
            "Daniel 9-10, 12",
            "Ezra 1-2",
            "Ezra 3-4",
            "Ezra 5-6"],
        memoryVerses: [
            "Daniel 6:26-27",
            "Daniel 9:19"]
    },
    {
        weekNum: 27, 
        dailyVerses: [
            "Zechariah 1:1-6, 2, 12",
            "Ezra 7-8",
            "Ezra 9-10",
            "Esther 1-2",
            "Esther 3-4"],
        memoryVerses: [
            "Zephaniah 3:17",
            "1 Peter 3:15"]
    },
    {
        weekNum: 28, 
        dailyVerses: [
            "Esther 5-7",
            "Esther 8-10",
            "Nehemiah 1-2",
            "Nehemiah 3-4",
            "Nehemiah 5-6"],
        memoryVerses: [
            "Deuteronomy 29:29",
            "Psalm 101:3-4"]
    },
    {
        weekNum: 29, 
        dailyVerses: [
            "Nehemiah 7-8",
            "Nehemiah 9",
            "Nehemiah 10",
            "Nehemiah 11",
            "Nehemiah 12"],
        memoryVerses: [
            "Nehemiah 6:9",
            "Nehemiah 9:6"]
    },
    {
        weekNum: 30, 
        dailyVerses: [
            "Nehemiah 13",
            "Malachi 1",
            "Malachi 2",
            "Malachi 3",
            "Malachi 4"],
        memoryVerses: [
            "Psalm 51:17",
            "Colossians 1:19-20"]
    },
    {
        weekNum: 31, 
        dailyVerses: [
            "Luke 1",
            "Luke 2",
            "Matthew 1-2",
            "Mark 1",
            "John 1"],
        memoryVerses: [
            "John 1:1-2",
            "John 1:14"]
    },
    {
        weekNum: 32, 
        dailyVerses: [
            "Matthew 3-4",
            "Matthew 5",
            "Matthew 6",
            "Matthew 7",
            "Matthew 8"],
        memoryVerses: [
            "Matthew 5:16",
            "Matthew 6:33"]
    },
    {
        weekNum: 33, 
        dailyVerses: [
            "Luke 9:10-62",
            "Mark 9-10",
            "Luke 12",
            "John 3-4",
            "Luke 14"],
        memoryVerses: [
            "Luke 14:26-27",
            "Luke 14:33"]
    },
    {
        weekNum: 34, 
        dailyVerses: [
            "John 6",
            "Matthew 19:16-30",
            "Luke 15-16",
            "Luke 17:11-37, 18",
            "Mark 10"],
        memoryVerses: [
            "Mark 10:45",
            "John 6:37"]
    },
    {
        weekNum: 35, 
        dailyVerses: [
            "John 11, Matthew 21:1-13",
            "John 13",
            "John 14-15",
            "John 16",
            "Matthew 24:1-31"],
        memoryVerses: [
            "John 13:34-35",
            "John 15:4-5"]
    },
    {
        weekNum: 36, 
        dailyVerses: [
            "Matthew 24:32-51",
            "John 17",
            "Matthew 26:35-27:31",
            "Matthew 27:32-66,",
            "Luke 23:26-56",
            "John 19"],
        memoryVerses: [
            "Luke 23:34",
            "John 17:3"]
    },
    {
        weekNum: 37, 
        dailyVerses: [
            "Mark 16",
            "Luke 24",
            "John 20-21",
            "Matthew 28",
            "Acts 1"],
        memoryVerses: [
            "Matthew 28:18-20",
            "Acts 1:8"]
    },
    {
        weekNum: 38, 
        dailyVerses: [
            "Acts 2-3",
            "Acts 4-5",
            "Acts 6",
            "Acts 7",
            "Acts 8-9"],
        memoryVerses: [
            "Acts 2:42",
            "Acts 4:31"]
    },
    {
        weekNum: 39, 
        dailyVerses: [
            "Acts 10-11",
            "Acts 12",
            "Acts 13-14",
            "James 1-2",
            "James 3-5"],
        memoryVerses: [
            "James 1:2-4",
            "James 2:17"]
    },
    {
        weekNum: 40,
        dailyVerses: [
            "Acts 15-16",
            "Galatians 1-3",
            "Galatians 4-6",
            "Acts 17-18:17",
            "1 Thessalonians 1-2"],
        memoryVerses: [
            "Acts 17:11",
            "Acts 17:24-25"]
    },
    {
        weekNum: 41, 
        dailyVerses: [
            "1 Thessalonians 3-5",
            "2 Thessalonians 1-3",
            "Acts 18:18-28, 19",
            "1 Corinthians 1-2",
            "1 Corinthians 3-4"],
        memoryVerses: [
            "1 Corinthians 1:18",
            "1 Thessalonians 5:23-24"]
    },
    {
        weekNum: 42, 
        dailyVerses: [
            "1 Corinthians 5-6",
            "1 Corinthians 7-8",
            "1 Corinthians 9-10",
            "1 Corinthians 11-12",
            "1 Corinthians 13-14"],
        memoryVerses: [
            "1 Corinthians 10:13",
            "1 Corinthians 13:13"]
    },
    {
        weekNum: 43, 
        dailyVerses: [
            "1 Corinthians 15-16",
            "2 Corinthians 1-2",
            "2 Corinthians 3-4",
            "2 Corinthians 5-6",
            "2 Corinthians 7-8"],
        memoryVerses: [
            "Romans 1:16-17",
            "1 Corinthians 15:3-4"]
    },
    {
        weekNum: 44, 
        dailyVerses: [
            "2 Corinthians 9-10",
            "2 Corinthians 11-13",
            "Romans 1-2, Acts 20:1-3",
            "Romans 3-4",
            "Romans 5-6"],
        memoryVerses: [
            "Romans 5:1",
            "2 Corinthians 10:4"]
    },
    {
        weekNum: 45, 
        dailyVerses: [
            "Romans 7-8",
            "Romans 9-10",
            "Romans 11-12",
            "Romans 13-14",
            "Romans 15-16"],
        memoryVerses: [
            "Romans 8:1",
            "Romans 12:1-2"]
    },
    {
        weekNum: 46, 
        dailyVerses: [
            "Acts 20-21",
            "Acts 22-23",
            "Acts 24-25",
            "Acts 26-27",
            "Acts 28"],
        memoryVerses: [
            "Acts 20:24",
            "2 Corinthians 4:7-10"]
    },
    {
        weekNum: 47, 
        dailyVerses: [
            "Colossians 1-2",
            "Colossians 3-4",
            "Ephesians 1-2",
            "Ephesians 3-4",
            "Ephesians 5-6"],
        memoryVerses: [
            "Ephesians 2:8-10",
            "Colossians 2:6-7"]
    },
    {
        weekNum: 48, 
        dailyVerses: [
            "Philippians 1-2",
            "Philippians 3-4",
            "Hebrews 1-2",
            "Hebrews 3-4",
            "Hebrews 5-6"],
        memoryVerses: [
            "Philippians 3:7-8",
            "Hebrews 4:14-16"]
    },
    {
        weekNum: 49, 
        dailyVerses: [
            "Hebrews 7",
            "Hebrews 8-9",
            "Hebrews 10",
            "Hebrews 11",
            "Hebrews 12"],
        memoryVerses: [
            "Galatians 2:19-20",
            "2 Corinthians 5:17"]
    },
    {
        weekNum: 50, 
        dailyVerses: [
            "1 Timothy 1-3",
            "1 Timothy 4-6",
            "2 Timothy 1-2",
            "2 Timothy 3-4",
            "1 Peter 1-2"],
        memoryVerses: [
            "2 Timothy 2:1-2",
            "2 Timothy 2:15"]
    },
    {
        weekNum: 51, 
        dailyVerses: [
            "1 Peter 3-4",
            "1 Peter 5, 2 Peter 1",
            "2 Peter 2-3",
            "1 John 1-3",
            "1 John 4-5"],
        memoryVerses: [
            "1 Peter 2:11",
            "1 John 4:10-11"]
    },
    {
        weekNum: 52, 
        dailyVerses: [
            "Revelation 1",
            "Revelation 2-3",
            "Revelation 4-5",
            "Revelation 18-19",
            "Revelation 20-22"],
        memoryVerses: [
            "Revelation 3:19",
            "Revelation 21:3-4"]
    }

]
module.exports = seedData;
