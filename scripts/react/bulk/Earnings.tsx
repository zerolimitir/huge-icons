import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgEarnings = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.807 3.286a.738.738 0 0 0-.518.53c-.092.43.142.813.549.9.135.029.915.044 2.274.044h2.068l-7.389 7.39c-5.275 5.276-7.406 7.433-7.45 7.539-.113.275-.038.66.165.839a.802.802 0 0 0 .805.131c.106-.044 2.263-2.175 7.539-7.45l7.39-7.389v2.068c0 1.359.015 2.139.044 2.274.165.771 1.274.756 1.435-.018.063-.305.034-4.485-.033-4.744-.127-.487-.421-1.017-.745-1.341-.324-.324-.853-.618-1.341-.745-.235-.061-4.541-.086-4.793-.028'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEarnings);
export default ForwardRef;
