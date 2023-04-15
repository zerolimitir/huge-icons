import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMusic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.862 13.303a3.036 3.036 0 0 0-2.211 2.006c-.148.458-.172 1.149-.056 1.612.342 1.366 1.496 2.279 2.885 2.284a2.902 2.902 0 0 0 1.85-.615c1.049-.798 1.451-2.309.939-3.53a3.053 3.053 0 0 0-1.969-1.72c-.348-.095-1.093-.114-1.438-.037M6.38 15.297c-1.132.261-1.984 1.076-2.285 2.183-.106.393-.098 1.127.017 1.532a2.984 2.984 0 0 0 3.201 2.182 2.98 2.98 0 0 0 2.567-2.16c.447-1.585-.426-3.172-2.02-3.674-.358-.113-1.123-.146-1.48-.063'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusic);
export default ForwardRef;
