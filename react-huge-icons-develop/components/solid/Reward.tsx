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
            d='M13.408 2.518a2.17 2.17 0 0 0-2.816 0l-.715.61a2.17 2.17 0 0 1-1.235.512l-.937.074a2.17 2.17 0 0 0-1.99 1.991l-.075.937a2.17 2.17 0 0 1-.512 1.235l-.61.715a2.17 2.17 0 0 0 0 2.816l.61.715c.296.348.475.78.512 1.235l.074.937a2.17 2.17 0 0 0 1.991 1.99l.937.075a2.17 2.17 0 0 1 1.235.512l.715.61a2.17 2.17 0 0 0 2.816 0l.715-.61a2.17 2.17 0 0 1 1.235-.512l.937-.074a2.17 2.17 0 0 0 1.99-1.991l.075-.937a2.17 2.17 0 0 1 .512-1.235l.61-.715a2.17 2.17 0 0 0 0-2.816l-.61-.715a2.17 2.17 0 0 1-.512-1.235l-.074-.937a2.17 2.17 0 0 0-1.991-1.99l-.937-.075a2.17 2.17 0 0 1-1.235-.512l-.715-.61ZM7 20.523v-2.837c.19.047.386.079.586.095l.937.075a.67.67 0 0 1 .381.158l.715.61a3.67 3.67 0 0 0 4.762 0l.715-.61a.67.67 0 0 1 .381-.158l.937-.075c.2-.016.396-.048.586-.095v2.837a1 1 0 0 1-1.371.928l-3.258-1.303a1 1 0 0 0-.742 0L8.37 21.451A1 1 0 0 1 7 20.523Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReward);
export default ForwardRef;
