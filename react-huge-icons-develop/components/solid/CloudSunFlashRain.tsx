import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudSunFlashRain = (
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
            d='M15 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm5.48 2.27a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.061l.706-.707a.75.75 0 0 1 1.061 0ZM22 9.75a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0 0 1.5h1Zm-3.004-.937a4 4 0 0 0-5.963-3.297 8.533 8.533 0 0 1 3.207 3.028 6.555 6.555 0 0 1 2.756.269ZM8.116 13.06l-3.433 4.12a.5.5 0 0 0 .385.82H6.5a.5.5 0 0 1 .5.5v2.119a.5.5 0 0 0 .884.32l3.433-4.119a.5.5 0 0 0-.385-.82H9.5a.5.5 0 0 1-.5-.5v-2.119a.5.5 0 0 0-.884-.32ZM10.619 20l1.85-2.22c1.086-1.302.16-3.28-1.537-3.28H10.5v-1.12c0-1.87-2.339-2.716-3.536-1.28L3.53 16.22a2.02 2.02 0 0 0-.366.649 7 7 0 1 1 12.273-6.62A4.997 4.997 0 0 1 17 10a5.002 5.002 0 0 1 1.87 9.638 4.127 4.127 0 0 0-.258-.656c-.2-.406-.45-.77-.674-1.061a9.3 9.3 0 0 0-.822-.929l-.094-.09a1.5 1.5 0 0 0-2.044 0l-.094.09a9.3 9.3 0 0 0-.822.928 6.374 6.374 0 0 0-.674 1.062A3.82 3.82 0 0 0 13.044 20H10.62ZM16 22c.828 0 1.5-.395 1.5-1.5S16 18 16 18s-1.5 1.395-1.5 2.5.672 1.5 1.5 1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudSunFlashRain);
export default ForwardRef;
