import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLandscapeLineCenter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 2.278a.883.883 0 0 0-.481.374c-.064.117-.071.317-.081 2.236l-.012 2.109-2.888.013c-3.215.016-3.016-.001-3.645.302-.868.417-1.441 1.154-1.644 2.113-.088.416-.087 4.728.002 5.156a2.993 2.993 0 0 0 2.357 2.357c.251.052.729.062 3.059.062h2.762v2.03c0 1.358.015 2.083.045 2.189.059.213.293.441.513.5.4.108.812-.12.92-.51.026-.094.042-.906.042-2.179V17h2.762c2.33 0 2.808-.01 3.059-.062a3.003 3.003 0 0 0 2.357-2.357c.091-.44.091-4.722 0-5.162a2.96 2.96 0 0 0-1.642-2.107c-.629-.303-.43-.286-3.645-.302l-2.888-.013-.012-2.109c-.011-2.042-.014-2.112-.093-2.247a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLandscapeLineCenter);
export default ForwardRef;
