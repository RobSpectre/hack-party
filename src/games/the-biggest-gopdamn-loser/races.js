// Fifteen seats Democrats flipped on November 3, 2026.
//
// For each race:
//   key:     names the race's ad file, video/<key>.mp4
//   before:  the Republican's last win in this seat (votes and points)
//   result:  the 2026 count, from Decision Desk HQ (or Ballotpedia where
//            noted). These are unofficial until each state certifies.
//   channel: the Republican's campaign YouTube channel
//   ad:      a YouTube id that overrides the channel's most-viewed video
//
// The ads themselves are downloaded by fetch-ads.mjs (see the top of that
// file) into public/games/the-biggest-gopdamn-loser/video/ and listed in
// ads.json. A race with no ad skips the ad slide.
//
// The answer each round is result.dem - result.rep.

const ddhq = race => `https://votes.decisiondeskhq.com/races/2026-11-03/${race}`
const ballotpedia = page => `https://ballotpedia.org/${page}`

export const rounds = [
  {
    number: 1,
    title: 'The House Always Loses',
    points: 1,
    races: [
      {
        key: 'ny-17',
        place: "New York's 17th District",
        seat: 'U.S. House: Rep. Mike Lawler (R)',
        republican: 'Mike Lawler',
        democrat: 'Cait Conley',
        before: { year: 2024, votes: 23946, points: 6.3, source: ballotpedia("New_York's_17th_Congressional_District_election,_2024") },
        result: { dem: 159170, rep: 142035, asOf: 'Ballotpedia, unofficial', source: ballotpedia("New_York's_17th_Congressional_District_election,_2026") },
        // The campaign's YouTube channel, e.g. 'https://www.youtube.com/@handle'.
        channel: null,
        // A YouTube id to use instead of the channel's most-viewed video.
        ad: null
      },
      {
        key: 'pa-01',
        place: "Pennsylvania's 1st District",
        seat: 'U.S. House: Rep. Brian Fitzpatrick (R)',
        republican: 'Brian Fitzpatrick',
        democrat: 'Bob Harvie',
        before: { year: 2024, votes: 59348, points: 12.8, source: ballotpedia("Pennsylvania's_1st_Congressional_District_election,_2026") },
        result: { dem: 188097, rep: 168536, asOf: 'Nov 6, 4:54 PM ET', source: ddhq('pennsylvania-us-house-1-general-election') },
        // The campaign's YouTube channel, e.g. 'https://www.youtube.com/@handle'.
        channel: null,
        // A YouTube id to use instead of the channel's most-viewed video.
        ad: null
      },
      {
        key: 'mo-02',
        place: "Missouri's 2nd District",
        seat: 'U.S. House: Rep. Ann Wagner (R)',
        republican: 'Ann Wagner',
        democrat: 'Fred Wellman',
        before: { year: 2024, votes: 51388, points: 12.0, source: ballotpedia("Missouri's_2nd_Congressional_District_election,_2024") },
        result: { dem: 169477, rep: 153132, asOf: 'Nov 5, 4:55 PM ET', source: ddhq('missouri-us-house-2-general-election') },
        // The campaign's YouTube channel, e.g. 'https://www.youtube.com/@handle'.
        channel: null,
        // A YouTube id to use instead of the channel's most-viewed video.
        ad: null
      },
      {
        key: 'va-02',
        place: "Virginia's 2nd District",
        seat: 'U.S. House: Rep. Jen Kiggans (R)',
        republican: 'Jen Kiggans',
        democrat: 'Elaine Luria',
        before: { year: 2024, votes: 15702, points: 3.8, source: ballotpedia("Virginia's_2nd_Congressional_District_election,_2024") },
        result: { dem: 178741, rep: 150299, asOf: 'Nov 6, 12:24 AM ET', source: ddhq('virginia-us-house-2-general-election') },
        // The campaign's YouTube channel, e.g. 'https://www.youtube.com/@handle'.
        channel: null,
        // A YouTube id to use instead of the channel's most-viewed video.
        ad: null
      },
      {
        key: 'pa-08',
        place: "Pennsylvania's 8th District",
        seat: 'U.S. House: Rep. Rob Bresnahan Jr. (R)',
        republican: 'Rob Bresnahan Jr.',
        democrat: 'Paige Cognetti',
        before: { year: 2024, votes: 6252, points: 1.6, source: ballotpedia("Pennsylvania's_8th_Congressional_District_election,_2024") },
        result: { dem: 153764, rep: 128589, asOf: 'Nov 6, 4:54 PM ET', source: ddhq('pennsylvania-us-house-8-general-election/results') },
        // The campaign's YouTube channel, e.g. 'https://www.youtube.com/@handle'.
        channel: null,
        // A YouTube id to use instead of the channel's most-viewed video.
        ad: null
      }
    ]
  },
  {
    number: 2,
    title: 'Squeakers No More',
    points: 2,
    races: [
      {
        key: 'pa-10',
        place: "Pennsylvania's 10th District",
        seat: 'U.S. House: Rep. Scott Perry (R)',
        republican: 'Scott Perry',
        democrat: 'Janelle Stelson',
        before: { year: 2024, votes: 5133, points: 1.2, source: ballotpedia("Pennsylvania's_10th_Congressional_District_election,_2024") },
        // DDHQ had 93% of the vote counted at this update.
        result: { dem: 174016, rep: 142100, asOf: 'Nov 6, 4:54 PM ET, 93% counted', source: ddhq('pennsylvania-us-house-10-general-election') },
        // The campaign's YouTube channel, e.g. 'https://www.youtube.com/@handle'.
        channel: null,
        // A YouTube id to use instead of the channel's most-viewed video.
        ad: null
      },
      {
        key: 'az-06',
        place: "Arizona's 6th District",
        seat: 'U.S. House: Rep. Juan Ciscomani (R)',
        republican: 'Juan Ciscomani',
        democrat: 'JoAnna Mendoza',
        before: { year: 2024, votes: 10822, points: 2.5, source: ballotpedia("Arizona's_6th_Congressional_District_election,_2024") },
        result: { dem: 188137, rep: 159603, asOf: 'Nov 7, 8:16 AM ET', source: ddhq('arizona-us-house-6-general-election') },
        // The campaign's YouTube channel, e.g. 'https://www.youtube.com/@handle'.
        channel: null,
        // A YouTube id to use instead of the channel's most-viewed video.
        ad: null
      },
      {
        key: 'wi-03',
        place: "Wisconsin's 3rd District",
        seat: 'U.S. House: Rep. Derrick Van Orden (R)',
        republican: 'Derrick Van Orden',
        democrat: 'Rebecca Cooke',
        before: { year: 2024, votes: 11256, points: 2.7, source: ballotpedia("Wisconsin's_3rd_Congressional_District_election,_2024") },
        result: { dem: 172771, rep: 150895, asOf: 'Nov 5, 4:55 PM ET', source: ddhq('wisconsin-us-house-3-general-election') },
        // The campaign's YouTube channel, e.g. 'https://www.youtube.com/@handle'.
        channel: null,
        // A YouTube id to use instead of the channel's most-viewed video.
        ad: null
      },
      {
        key: 'co-08',
        place: "Colorado's 8th District",
        seat: 'U.S. House: Rep. Gabe Evans (R)',
        republican: 'Gabe Evans',
        democrat: 'Manny Rutinel',
        before: { year: 2024, votes: 2449, points: 0.8, source: ballotpedia("Colorado's_8th_Congressional_District_election,_2024") },
        result: { dem: 158784, rep: 116602, asOf: 'Nov 6, 6:03 PM ET', source: ddhq('colorado-us-house-8-general-election') },
        // The campaign's YouTube channel, e.g. 'https://www.youtube.com/@handle'.
        channel: null,
        // A YouTube id to use instead of the channel's most-viewed video.
        ad: null
      },
      {
        key: 'ia-01',
        place: "Iowa's 1st District",
        seat: 'U.S. House: Rep. Mariannette Miller-Meeks (R)',
        republican: 'Mariannette Miller-Meeks',
        democrat: 'Christina Bohannan',
        before: { year: 2024, votes: 799, points: 0.2, source: ballotpedia("Iowa's_1st_Congressional_District_election,_2024") },
        result: { dem: 183494, rep: 150471, asOf: 'Nov 6, 1:35 PM ET', source: ddhq('iowa-us-house-1-general-election') },
        // The campaign's YouTube channel, e.g. 'https://www.youtube.com/@handle'.
        channel: null,
        // A YouTube id to use instead of the channel's most-viewed video.
        ad: null
      }
    ]
  },
  {
    number: 3,
    title: 'Senate Shellacking',
    points: 3,
    races: [
      {
        key: 'me-sen',
        place: 'Maine',
        seat: 'U.S. Senate: Sen. Susan Collins (R)',
        republican: 'Susan Collins',
        democrat: 'Troy Jackson',
        before: { year: 2020, votes: 70422, points: 8.6, source: ballotpedia('United_States_Senate_election_in_Maine,_2020') },
        result: { dem: 376187, rep: 332686, asOf: 'Nov 6, 11:11 AM ET', source: ddhq('maine-us-senate-general-election/results') },
        // The campaign's YouTube channel, e.g. 'https://www.youtube.com/@handle'.
        channel: null,
        // A YouTube id to use instead of the channel's most-viewed video.
        ad: null
      },
      {
        key: 'ks-sen',
        place: 'Kansas',
        seat: 'U.S. Senate: Sen. Roger Marshall (R)',
        republican: 'Roger Marshall',
        democrat: 'Adam Hamilton',
        before: { year: 2020, votes: 156432, points: 11.4, source: ballotpedia('United_States_Senate_election_in_Kansas,_2020') },
        result: { dem: 561148, rep: 505559, asOf: 'Nov 7, 8:30 AM ET', source: ddhq('kansas-us-senate-general-election') },
        // The campaign's YouTube channel, e.g. 'https://www.youtube.com/@handle'.
        channel: null,
        // A YouTube id to use instead of the channel's most-viewed video.
        ad: null
      },
      {
        key: 'oh-sen',
        place: 'Ohio',
        seat: 'U.S. Senate special: Sen. Jon Husted (R)',
        republican: 'Jon Husted',
        democrat: 'Sherrod Brown',
        before: { year: 2022, winner: 'J.D. Vance', votes: 252625, points: 6.1, source: ballotpedia('United_States_Senate_election_in_Ohio,_2022') },
        result: { dem: 2301042, rep: 2077748, asOf: 'Ballotpedia, unofficial', source: ballotpedia('United_States_Senate_special_election_in_Ohio,_2026') },
        // The campaign's YouTube channel, e.g. 'https://www.youtube.com/@handle'.
        channel: null,
        // A YouTube id to use instead of the channel's most-viewed video.
        ad: null
      },
      {
        key: 'nc-sen',
        place: 'North Carolina',
        seat: 'U.S. Senate: open, Thom Tillis (R) retired',
        republican: 'Michael Whatley',
        democrat: 'Roy Cooper',
        before: { year: 2020, winner: 'Thom Tillis', votes: 95633, points: 1.8, source: ballotpedia('United_States_Senate_election_in_North_Carolina,_2020') },
        result: { dem: 2467963, rep: 1643088, asOf: 'Nov 5, 4:55 PM ET', source: ddhq('north-carolina-us-senate-general-election/results') },
        // The campaign's YouTube channel, e.g. 'https://www.youtube.com/@handle'.
        channel: null,
        // A YouTube id to use instead of the channel's most-viewed video.
        ad: null
      },
      {
        key: 'tx-sen',
        place: 'Texas',
        seat: 'U.S. Senate: open, John Cornyn (R) lost his primary',
        republican: 'Ken Paxton',
        democrat: 'James Talarico',
        before: { year: 2020, winner: 'John Cornyn', votes: 1074219, points: 9.6, source: ballotpedia('United_States_Senate_election_in_Texas,_2020') },
        result: { dem: 5446338, rep: 4250352, asOf: 'Nov 6, 4:50 PM ET', source: ddhq('texas-us-senate-general-election/results') },
        // The campaign's YouTube channel, e.g. 'https://www.youtube.com/@handle'.
        channel: null,
        // A YouTube id to use instead of the channel's most-viewed video.
        ad: null
      }
    ]
  }
]

export const margin = race => race.result.dem - race.result.rep
