import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookHelp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.503 2.042c-1.016.173-1.947.934-2.301 1.883-.206.552-.201.376-.201 6.245L4 15.639l.277-.214c.323-.25.889-.551 1.296-.69.652-.222.397-.215 7.692-.215H20V9.618c0-5.359.007-5.177-.234-5.769a2.99 2.99 0 0 0-1.47-1.537c-.653-.314-.125-.289-6.176-.297-2.981-.003-5.509.008-5.617.027m6.167 2.301c.935.209 1.767 1.046 1.995 2.007.082.346.082.954 0 1.3-.279 1.177-1.382 2.074-2.565 2.087-.379.004-.533-.067-.716-.328-.098-.138-.117-.206-.117-.402 0-.445.257-.697.777-.76.391-.048.63-.156.852-.385.583-.6.401-1.611-.357-1.984-.285-.14-.792-.141-1.076-.001-.421.207-.645.548-.709 1.079-.061.513-.322.783-.754.783-.272 0-.453-.097-.619-.333-.11-.157-.119-.196-.114-.478a2.71 2.71 0 0 1 1.522-2.385c.587-.29 1.189-.354 1.881-.2m-.33 6.723c.369.126.66.538.66.934 0 .527-.473 1-1 1-.242 0-.521-.119-.701-.299a.984.984 0 0 1 .001-1.403.977.977 0 0 1 1.04-.232m-5.743 4.613c-1.023.132-1.984.877-2.373 1.839a2.99 2.99 0 0 0 .435 2.989c.383.479.909.836 1.501 1.02l.3.093h11.08l.3-.093a3.111 3.111 0 0 0 2.064-2.107c.061-.209.072-.469.086-2.01l.015-1.77-6.593.005c-3.625.003-6.692.018-6.815.034'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookHelp);
export default ForwardRef;
