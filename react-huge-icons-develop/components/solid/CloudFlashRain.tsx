import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudFlashRain = (
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
            d='m12.286 17 .183-.22c1.086-1.302.16-3.28-1.537-3.28H10.5v-1.12c0-1.87-2.339-2.716-3.536-1.28l-3.072 3.686A7 7 0 1 1 15.44 7.248a5 5 0 1 1 2.494 9.665 9.273 9.273 0 0 0-.817-.92l-.094-.091a1.5 1.5 0 0 0-2.044 0l-.094.09A9.3 9.3 0 0 0 14.001 17h-1.715Zm-7.603-.82 3.433-4.12a.5.5 0 0 1 .884.321V14.5a.5.5 0 0 0 .5.5h1.432a.5.5 0 0 1 .385.82l-3.433 4.12A.5.5 0 0 1 7 19.618V17.5a.5.5 0 0 0-.5-.5H5.068a.5.5 0 0 1-.385-.82ZM16 21c.828 0 1.5-.395 1.5-1.5S16 17 16 17s-1.5 1.395-1.5 2.5.672 1.5 1.5 1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudFlashRain);
export default ForwardRef;
