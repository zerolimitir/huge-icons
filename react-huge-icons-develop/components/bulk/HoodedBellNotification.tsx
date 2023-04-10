import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHoodedBellNotification = (
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
        <path fill='currentColor' d='M12 21c1.385 0 2.563-.835 3-2H9c.437 1.165 1.615 2 3 2Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M13.69 3.754A2.27 2.27 0 0 0 9.73 5.27v.104c-2.142.733-3.728 2.477-3.97 4.601l-.447 3.94c-.08.71-.38 1.387-.865 1.957C3.35 17.161 4.394 19 6.223 19h11.554c1.829 0 2.872-1.84 1.775-3.128a3.656 3.656 0 0 1-.865-1.957l-.448-3.94a4.677 4.677 0 0 0-.02-.164 4 4 0 0 1-4.528-6.057Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <circle cx={17} cy={6} r={3} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgHoodedBellNotification);
export default ForwardRef;
