import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudSunRainLow = (
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
            d='M14.75 3a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0V3Zm4.73 2.58a.75.75 0 0 0-1.06-1.06l-.708.707a.75.75 0 0 0 1.06 1.06l.708-.707ZM21.75 10a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75ZM14 6a4 4 0 0 1 3.996 3.813 6.497 6.497 0 0 0-2.756-.269 8.533 8.533 0 0 0-3.207-3.028A3.982 3.982 0 0 1 14 6ZM8 21a7 7 0 1 1 6.439-9.751A4.997 4.997 0 0 1 16 11a5.002 5.002 0 0 1 0 10h-2.044a3.82 3.82 0 0 0-.344-1.018c-.2-.406-.45-.77-.674-1.061a9.3 9.3 0 0 0-.822-.929l-.094-.09a1.5 1.5 0 0 0-2.044 0l-.094.09a9.301 9.301 0 0 0-.823.928 6.4 6.4 0 0 0-.673 1.062A3.824 3.824 0 0 0 8.044 21H8Zm3 2c.828 0 1.5-.395 1.5-1.5S11 19 11 19s-1.5 1.395-1.5 2.5.672 1.5 1.5 1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudSunRainLow);
export default ForwardRef;
