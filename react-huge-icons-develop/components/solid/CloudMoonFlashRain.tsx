import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudMoonFlashRain = (
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
            d='M17 6.5c1.876 0 3.566.796 4.75 2.064a5 5 0 0 0-8.468-4.907 8.535 8.535 0 0 1 2.958 2.887c.25-.029.503-.044.76-.044Zm-8.884 6.56-3.433 4.12a.5.5 0 0 0 .385.82H6.5a.5.5 0 0 1 .5.5v2.119a.5.5 0 0 0 .884.32l3.433-4.119a.5.5 0 0 0-.385-.82H9.5a.5.5 0 0 1-.5-.5v-2.119a.5.5 0 0 0-.884-.32ZM17.5 20.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S16 18 16 18s1.5 1.395 1.5 2.5Zm-5.031-2.72-.183.22H14l.06-.08a9.3 9.3 0 0 1 .823-.928l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09a9.273 9.273 0 0 1 .817.92 5.002 5.002 0 1 0-2.494-9.663 7.028 7.028 0 0 0-2.983-3.338 7 7 0 0 0-8.564 10.875l3.072-3.685c1.197-1.438 3.536-.59 3.536 1.28V14.5h.432c1.696 0 2.623 1.978 1.537 3.28Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonFlashRain);
export default ForwardRef;
