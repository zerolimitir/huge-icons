import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTwitterSparrow = (
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
            d='M15.286 4c-2.104 0-3.81 1.79-3.81 4 0 .334.04.658.113.968-2.023 0-5.07-.409-7.615-2.958-.338-.34-.962-.113-.939.366.378 7.687 3.67 9.929 5.365 10.068-1.095 1.082-2.685 1.935-4.285 2.318-.423.101-.527.564-.114.698 1.145.372 2.784.516 3.666.54 6.241 0 11.313-5.253 11.426-11.778.82-.533 1.345-1.69 1.64-2.51.071-.199-.256-.431-.452-.35-.612.255-1.389.315-2.05.1C17.53 4.569 16.471 4 15.285 4Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTwitterSparrow);
export default ForwardRef;
