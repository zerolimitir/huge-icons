import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTextSpacing = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.7 14.316c-.104.049-.545.463-1.265 1.189-1.039 1.047-1.108 1.127-1.146 1.305a.935.935 0 0 0 0 .38c.038.178.107.257 1.126 1.285 1.12 1.129 1.261 1.242 1.556 1.244a.9.9 0 0 0 .523-.191c.113-.1.224-.366.225-.539.002-.252-.102-.423-.507-.835l-.387-.394h10.35l-.422.43c-.458.467-.537.61-.502.915a.74.74 0 0 0 1.049.579c.104-.049.545-.463 1.265-1.189 1.039-1.047 1.108-1.127 1.146-1.305a.935.935 0 0 0 0-.38c-.038-.178-.107-.258-1.146-1.305-.72-.726-1.161-1.14-1.265-1.189a.74.74 0 0 0-1.049.579c-.035.305.044.448.502.915l.422.43H6.825l.422-.43c.458-.467.537-.61.502-.915a.74.74 0 0 0-1.049-.579'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTextSpacing);
export default ForwardRef;
