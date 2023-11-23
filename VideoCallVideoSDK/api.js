export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIxMDQ2YjRjZC04ZGE1LTRkN2EtOGYyYi1mZjEyZjYwMTQ4MGMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwMDcwNjQxNSwiZXhwIjoxNzE2MjU4NDE1fQ.ErsNDasC6xT3gVDeSaGshHXZOLhq__jUhIGWMX-cEjo';
// API call to create meeting
export const createMeeting = async ({token}) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: 'POST',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });

  const {roomId} = await res.json();
  return roomId;
};
