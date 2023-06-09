import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudHalfMoon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15.2 3.255c-1.815.76-2.955 2.264-3.179 4.193l-.026.228.252.127c1.227.617 2.318 1.727 2.995 3.045.159.31.218.391.271.374.038-.012.239-.061.448-.108.511-.118 1.496-.127 1.997-.018.646.139 1.325.418 1.799.739.147.1.191.113.26.076.173-.091.937-.904 1.138-1.211.406-.62.667-1.291.781-2.005.09-.568.085-.874-.015-.974-.136-.136-.268-.142-.618-.026-.544.18-.945.238-1.463.212-1.617-.081-2.937-1.014-3.549-2.507-.17-.416-.25-.809-.285-1.397-.034-.561-.077-.672-.304-.78-.174-.082-.238-.078-.502.032M8.06 8.583a5.55 5.55 0 0 0-4.296 3.748A5.12 5.12 0 0 0 3.509 14c0 .886.184 1.667.578 2.46.268.538.577.962 1.034 1.419a5.372 5.372 0 0 0 2.209 1.357c.841.267.622.256 5.29.273 2.974.012 4.371.003 4.68-.028 1.842-.19 3.181-1.654 3.183-3.481.002-1.378-.748-2.558-2.006-3.158-.535-.255-.764-.301-1.477-.302-.551 0-.665.012-1.027.11-.459.124-.587.132-.873.056-.493-.132-.823-.414-1.051-.898-.829-1.761-2.305-2.914-4.126-3.224-.465-.079-1.415-.079-1.863-.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudHalfMoon);
export default ForwardRef;
