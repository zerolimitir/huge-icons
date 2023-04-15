import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVoiceMail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.34 2.046a4.934 4.934 0 0 0-1.52.471c-1.446.709-2.43 1.993-2.745 3.583-.073.368-.073 1.432 0 1.8a5.076 5.076 0 0 0 4.025 4.025c.421.083 1.476.073 1.898-.018 1.494-.322 2.801-1.321 3.457-2.644.391-.787.526-1.381.523-2.303-.002-.579-.015-.713-.109-1.091-.191-.765-.495-1.396-.943-1.957a5.04 5.04 0 0 0-4.586-1.866m-10 10a4.934 4.934 0 0 0-1.52.471c-1.446.709-2.43 1.993-2.745 3.583-.073.368-.073 1.432 0 1.8.361 1.823 1.652 3.291 3.386 3.853.566.183.863.227 1.539.227.676 0 .973-.044 1.539-.227a5.086 5.086 0 0 0 3.213-3.175c.176-.519.228-.884.226-1.598-.002-.601-.014-.73-.109-1.111-.191-.765-.495-1.396-.943-1.957a5.04 5.04 0 0 0-4.586-1.866'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVoiceMail);
export default ForwardRef;
