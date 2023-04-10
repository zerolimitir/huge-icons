import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudHalfMoonRainMid = (
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
            d='M20.832 9.749a6.5 6.5 0 0 1 .189.144c.615-.831.979-1.86.979-2.973 0-.245-.268-.385-.495-.293a4 4 0 0 1-5.502-3.873c.015-.36-.293-.68-.634-.562a5.014 5.014 0 0 0-3.054 2.979 8.53 8.53 0 0 1 3.925 3.373 6.478 6.478 0 0 1 4.592 1.205Zm-14.19 9.844a7 7 0 1 1 8.796-9.345A4.994 4.994 0 0 1 17 10c1.102 0 2.12.356 2.947.96a5.002 5.002 0 0 1-1.534 8.837 3.982 3.982 0 0 0-.301-.815c-.2-.406-.45-.77-.674-1.062a9.285 9.285 0 0 0-.822-.928l-.094-.09a1.5 1.5 0 0 0-2.044 0l-.094.09a9.285 9.285 0 0 0-.822.928 6.374 6.374 0 0 0-.674 1.062A3.82 3.82 0 0 0 12.544 20h-.088a3.82 3.82 0 0 0-.344-1.018c-.2-.406-.45-.77-.674-1.062a9.285 9.285 0 0 0-.822-.928l-.094-.09a1.5 1.5 0 0 0-2.044 0l-.094.09a9.286 9.286 0 0 0-.823.928 6.438 6.438 0 0 0-.673 1.062 4.171 4.171 0 0 0-.245.611ZM11 20.5c0 1.104-.672 1.5-1.5 1.5S8 21.604 8 20.5C8 19.395 9.5 18 9.5 18s1.5 1.395 1.5 2.5Zm4.5 1.5c.828 0 1.5-.396 1.5-1.5 0-1.105-1.5-2.5-1.5-2.5S14 19.395 14 20.5c0 1.104.672 1.5 1.5 1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudHalfMoonRainMid);
export default ForwardRef;
