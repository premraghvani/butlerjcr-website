# Butler JCR Website

This is the light-weight system, running on Amazon AWS (Lambda, API Gateway - serverless architecture) for the main public part of the Josephine Butler College JCR website.

Although quite a bit of this is based on Ned Reid's version, I have chosen to use a serverless architecture to save costs. I am also not a fan of React whatsoever, given how weakly it performs when you don't have much internet speed (I have worked on this quite a bit on the train) - so for digital accessibility, I have chosen serverless.

I have also divided the website into a much lightweight public side, and then the private side, with much more data which is being protected behind this so-called password wall.

## Notices
- Adapted from [Ned Reid's Version](github.com/NedReid/ButlerJCRWebsite)
- Complements [the intranet](https://github.com/premraghvani/butlerjcr-intranet/)

## Maintenance

This main website only contains basic information, so I have not put much effort in making it easy to change elements, like in the dynamic web pages
behind the intranet.

I anticipate you may have to change webpages. They are on the `/assets/html` bit - you only need to amend the HTML - and find the relevant section
to update. It should be fairly intuitive.

- The front page yearly. Please just upload the images to AWS S3 (bucket: `butler-jcr-public`) in the `sabbs` folder. I suggest you start off
each file name with the year of the sabb. Please pre-crop these to a square, and please please please convert to JPG and compress (makes it fast).
Do feel free to do some gardening with what gets sent over, e.g. adding `<br>` for line breaks and `<a href>` for links (e.g. Instagram, email mailtos)

- The welfare page at the request of the welfare committee - just because links can break, the sexual health supplies page may change, etc.

## Configuration

- Simply put, this is linked from API gateway (which provides the endpoint) to AWS Lambda. This code entirely lives within it, noting the `index.js` page must be in the root.

- It should be all good, and we can use the Lambda function suitably titled in the `eu-west-2` region - more info available privately