import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartWaveFull = (
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
            d='M2.45 8.4a.75.75 0 1 0-.9 1.2l.9-1.2Zm2.162 2.56.45-.6-.45.6Zm2.615-.187-.53-.53.53.53Zm.81-.81.531.53-.53-.53Zm3.204.519.67-.335-.67.335Zm1.518 3.036-.67.335.67-.335Zm3.203.52.53.53-.53-.53Zm.811-.812-.53-.53.53.53Zm2.615-.185-.45.6.45-.6ZM21.55 15.6a.75.75 0 1 0 .9-1.2l-.9 1.2ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5ZM1.55 9.6l2.612 1.96.9-1.2L2.45 8.4l-.9 1.2Zm6.207 1.704.811-.812-1.06-1.06-.812.811 1.06 1.06Zm2.813-.487 1.518 3.037 1.342-.671-1.518-3.037-1.342.671Zm5.922 3.751.812-.811-1.06-1.06-.812.81 1.06 1.061Zm2.446-.927L21.55 15.6l.9-1.2-2.612-1.96-.9 1.2Zm-1.634.116a1.25 1.25 0 0 1 1.634-.116l.9-1.2a2.75 2.75 0 0 0-3.595.255l1.06 1.06Zm-5.216.097a2.75 2.75 0 0 0 4.404.714l-1.06-1.06a1.25 1.25 0 0 1-2.002-.325l-1.342.67Zm-3.52-3.362a1.25 1.25 0 0 1 2.002.325l1.342-.67a2.75 2.75 0 0 0-4.404-.715l1.06 1.06ZM4.162 11.56a2.75 2.75 0 0 0 3.595-.255l-1.06-1.06a1.25 1.25 0 0 1-1.635.115l-.9 1.2Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartWaveFull);
export default ForwardRef;
