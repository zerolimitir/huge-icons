import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMusicQuaver = (
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
            d='M12.773 8.023c.485.047.727.113.727.113V17a.75.75 0 0 1-1.5 0V8s.332-.02.773.023Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path fill='currentColor' d='M13.5 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z' />
        <path
            fill='currentColor'
            d='M20 10a8.003 8.003 0 0 0-6.02-7.753C12.91 1.975 12 2.896 12 4v4a7.996 7.996 0 0 1 6.868 3.896c.231.385.821.365.923-.072A8.022 8.022 0 0 0 20 10Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicQuaver);
export default ForwardRef;
