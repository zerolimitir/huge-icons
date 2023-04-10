import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudMoonRainHigh = (
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
            d='M17 6.5c1.876 0 3.566.796 4.75 2.064a5 5 0 0 0-8.468-4.907 8.535 8.535 0 0 1 2.958 2.887c.25-.029.503-.044.76-.044Zm-7 11c0 .168-.01.336-.032.5H10l.06-.08a9.3 9.3 0 0 1 .823-.928l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09A9.3 9.3 0 0 1 13.999 18h.033a3.823 3.823 0 0 1-.032-.5c0-.596.196-1.127.388-1.518.2-.406.45-.77.674-1.061a9.3 9.3 0 0 1 .822-.929l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09a9.3 9.3 0 0 1 .823.928c.223.291.474.656.673 1.062a3.8 3.8 0 0 1 .349 1.048A4.993 4.993 0 0 0 22 13a4.978 4.978 0 0 0-1-3 4.992 4.992 0 0 0-4-2c-.545 0-1.07.087-1.561.249a7.028 7.028 0 0 0-2.983-3.338 7 7 0 0 0-8.16 11.272c.03-.07.06-.138.092-.201.2-.406.45-.77.674-1.061a9.301 9.301 0 0 1 .822-.929l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09a9.301 9.301 0 0 1 .823.928 6.4 6.4 0 0 1 .673 1.062c.192.391.388.922.388 1.518ZM7 19c.828 0 1.5-.395 1.5-1.5S7 15 7 15s-1.5 1.395-1.5 2.5S6.172 19 7 19Zm11.5-1.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S17 15 17 15s1.5 1.395 1.5 2.5Zm-5 3c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S12 18 12 18s1.5 1.395 1.5 2.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonRainHigh);
export default ForwardRef;
