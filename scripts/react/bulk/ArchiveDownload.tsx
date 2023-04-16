import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArchiveDownload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.42 2.044a4.614 4.614 0 0 0-1.199.386 4.001 4.001 0 0 0-2.178 3.025C4.015 5.659 4 7.03 4 9.466c0 3.504.004 3.698.07 3.679l.25-.072c.123-.035.476-.051 1.12-.052.894-.001.953.004 1.2.095.562.207.698.337 1.574 1.503.805 1.07.935 1.223 1.283 1.496.488.384.999.632 1.623.789.443.112 1.38.105 1.821-.014a4.315 4.315 0 0 0 1.792-.97c.129-.118.581-.675 1.006-1.237.424-.563.832-1.079.906-1.148.191-.177.414-.308.715-.419.247-.091.306-.096 1.2-.095.644.001.997.017 1.12.052l.25.072c.066.019.07-.173.07-3.653 0-2.307-.015-3.798-.042-4.006-.221-1.764-1.64-3.196-3.413-3.443-.376-.052-8.757-.051-9.125.001m4.851 3.258a.734.734 0 0 1 .413.398c.069.149.074.306.075 2.32l.001 2.159.91-.905c.501-.499.968-.935 1.038-.97.254-.127.673-.048.857.162a.783.783 0 0 1 .119.846c-.042.081-.524.591-1.07 1.132-.967.958-1.004.989-1.374 1.171-.834.41-1.646.41-2.48 0-.369-.182-.408-.215-1.354-1.151-.535-.53-1.008-1.031-1.05-1.112-.161-.313-.071-.694.219-.928.187-.152.536-.191.749-.084.075.037.537.466 1.026.954l.89.885V8.028c0-1.851.009-2.171.062-2.299a.734.734 0 0 1 .398-.413.665.665 0 0 1 .571-.014'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArchiveDownload);
export default ForwardRef;