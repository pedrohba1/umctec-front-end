/* eslint-disable import/no-extraneous-dependencies */

import { rest } from 'msw';

export default rest.post(
  '/v1/backoffice/session/clients/login',
  (req, res, ctx) => {
    const { email, password } = req.body;
    if (email === 'test@mail.com' && password === '123456') {
      return res(
        ctx.status(200),
        ctx.json({
          token:
            'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3Nfb3BlcmF0aW9ucyI6eyJvcGVyYXRpb25fdGVzdF9vbmUiOnsiW1BBVENIXS92MS9iYWNrb2ZmaWNlL3Nlc3Npb24vYWRtaW5zLzppZCI6WyJvbmx5LXNlbGYiLCJlbWFpbCIsInBhc3N3b3JkIiwibmFtZSJdfSwib3BlcmF0aW9uX3Rlc3RfdHdvIjp7IltHRVRdL3YxL2JhY2tvZmZpY2Uvc2Vzc2lvbi9wcm92aWRlcnMiOlsiZnVsbCJdfX0sImFjY291bnQiOiJhZG1pbiIsImF1ZCI6InRoZXJtb19hcGkiLCJleHAiOjE2MjgwOTUwOTQsImlhdCI6MTYyNTY3NTg5NCwiaXNfYWRhbSI6ZmFsc2UsImlzcyI6InRoZXJtb19hcGkiLCJqdGkiOiI2OTU3Nzc5OC04NzkxLTQzMjUtOTFhMi1iYTdhZDQ1YTc1ZmYiLCJuYmYiOjE2MjU2NzU4OTMsInN1YiI6IjdiNjhkOWRkLTBhM2EtNGI2My05ZTJkLTYwNDBiZmE2YTEzNSIsInR5cCI6ImFjY2VzcyJ9.pP0Bdhan4jeVK14oBVLOcq1c8sBW19affTDjYpsawVgRehRqGJT1NzSlXB41UwtnlHXD0yW5O27Iy-bK1N55Cg'
        })
      );
    }

    return res(ctx.status(400));
  }
);
