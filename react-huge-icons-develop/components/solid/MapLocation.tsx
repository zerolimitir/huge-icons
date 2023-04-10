import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapLocation = (
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
            d='M5.5 6.87c-1.105.563-2.127 1.28-2.778 1.772A1.86 1.86 0 0 0 2 10.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 1.66-.186 2.83.705 4 1.595s2.34 1.781 4 1.595c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.853-1.028-1.348-1.736-.872a16.89 16.89 0 0 1-1.97 1.151c-.295 1.277-.878 2.611-1.592 3.73-.53.83-1.18 1.62-1.93 2.218-.74.591-1.688 1.08-2.772 1.08-1.084 0-2.031-.489-2.772-1.08-.75-.598-1.4-1.389-1.93-2.219C6.276 10.6 5.521 8.556 5.5 6.871Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 14c2.5 0 5-4.549 5-7.2S14.761 2 12 2 7 4.149 7 6.8 9.5 14 12 14Zm0-6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocation);
export default ForwardRef;
