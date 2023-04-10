import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgReward = (
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
            d='M7 16.107v4.416a1 1 0 0 0 1.371.928l3.258-1.302a1 1 0 0 1 .742 0l3.258 1.302A1 1 0 0 0 17 20.523v-4.416a2.166 2.166 0 0 1-.705.179l-.937.074a2.17 2.17 0 0 0-1.235.512l-.715.61a2.17 2.17 0 0 1-2.816 0l-.715-.61a2.17 2.17 0 0 0-1.235-.512l-.937-.074A2.166 2.166 0 0 1 7 16.107Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M10.592 2.518a2.17 2.17 0 0 1 2.816 0l.715.61c.348.296.78.475 1.235.512l.937.074a2.17 2.17 0 0 1 1.99 1.991l.075.937c.037.455.216.887.512 1.235l.61.715a2.17 2.17 0 0 1 0 2.816l-.61.715a2.17 2.17 0 0 0-.512 1.235l-.074.937a2.17 2.17 0 0 1-1.991 1.99l-.937.075a2.17 2.17 0 0 0-1.235.512l-.715.61a2.17 2.17 0 0 1-2.816 0l-.715-.61a2.17 2.17 0 0 0-1.235-.512l-.937-.074a2.17 2.17 0 0 1-1.99-1.991l-.075-.937a2.17 2.17 0 0 0-.512-1.235l-.61-.715a2.17 2.17 0 0 1 0-2.816l.61-.715a2.17 2.17 0 0 0 .512-1.235l.074-.937a2.17 2.17 0 0 1 1.991-1.99l.937-.075a2.17 2.17 0 0 0 1.235-.512l.715-.61Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReward);
export default ForwardRef;
