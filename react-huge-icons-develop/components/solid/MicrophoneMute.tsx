import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMicrophoneMute = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2.47 2.22a.75.75 0 0 0 0 1.06L8 8.81V12a4 4 0 0 0 6.394 3.205l.89.89A5.25 5.25 0 0 1 6.75 12v-.999a.75.75 0 0 0-1.499 0v1a6.751 6.751 0 0 0 6 6.709v1.79H9A.75.75 0 0 0 9 22h6a.75.75 0 0 0 0-1.5h-2.25v-1.791a6.721 6.721 0 0 0 3.6-1.548l4.12 4.12a.75.75 0 1 0 1.06-1.061l-18-18a.75.75 0 0 0-1.06 0Zm15.663 12.603-1.154-1.154A5.24 5.24 0 0 0 17.25 12v-1a.75.75 0 0 1 1.5 0v1a6.71 6.71 0 0 1-.617 2.823ZM8.166 4.855l7.783 7.784c.034-.208.051-.422.051-.639V6a4 4 0 0 0-7.834-1.145Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMicrophoneMute);
export default ForwardRef;
