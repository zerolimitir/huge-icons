import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHoodedBellSilent = (
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
            d='m18.687 12.915-.447-3.94c-.241-2.124-1.827-3.868-3.97-4.601V4.27a2.27 2.27 0 1 0-4.54 0v.104a6.65 6.65 0 0 0-.916.392l11.184 11.183a1.795 1.795 0 0 0-.446-1.077 3.655 3.655 0 0 1-.865-1.957ZM6.223 18h10.765l3.53 3.53a.75.75 0 0 0 1.061-1.06l-18-18a.75.75 0 0 0-1.06 1.06l3.75 3.75a5.008 5.008 0 0 0-.508 1.695l-.448 3.94c-.08.71-.38 1.387-.865 1.957C3.351 16.161 4.395 18 6.223 18Zm8.75 2.072C14.514 21.198 13.356 22 12 22c-1.356 0-2.514-.8-2.972-1.928a.423.423 0 0 1 .395-.572h5.154a.423.423 0 0 1 .395.572Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHoodedBellSilent);
export default ForwardRef;
