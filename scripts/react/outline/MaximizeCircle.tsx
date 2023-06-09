import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMaximizeCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M15.815 2.277c-.485.119-.717.727-.432 1.131a.939.939 0 0 0 .277.248c.154.081.226.084 1.838.096l1.677.012-4.925 4.928c-3.559 3.561-4.934 4.961-4.957 5.048-.158.609.29 1.096.896.972.186-.039.317-.166 5.119-4.963l4.928-4.924.012 1.697c.012 1.697.012 1.698.105 1.847.361.581 1.228.442 1.365-.219.031-.151.041-.993.033-2.773-.011-2.504-.013-2.56-.095-2.717a.965.965 0 0 0-.253-.28l-.17-.12-2.646-.007c-1.456-.003-2.703.008-2.772.024M10.56 4.268c-2.361.11-4.716 1.268-6.209 3.052-1.13 1.349-1.795 2.865-2.034 4.64-.059.438-.059 1.642 0 2.08.228 1.691.845 3.156 1.872 4.444a8.785 8.785 0 0 0 4.931 3.051 7.935 7.935 0 0 0 1.88.196c.363 0 .831-.022 1.04-.049 3.888-.498 6.912-3.38 7.58-7.222.093-.539.143-1.402.093-1.634-.109-.51-.75-.731-1.177-.406-.208.159-.261.329-.299.956a6.999 6.999 0 0 1-.783 2.904c-.998 1.986-2.866 3.395-5.103 3.849-.39.079-.572.091-1.351.091-1.02 0-1.42-.059-2.251-.329-2.145-.698-3.908-2.449-4.623-4.591-.284-.851-.346-1.265-.346-2.3 0-.784.012-.959.093-1.36.462-2.281 1.91-4.164 3.967-5.156a7.029 7.029 0 0 1 2.784-.721c.627-.038.797-.091.956-.299.329-.432.104-1.068-.418-1.18a1.292 1.292 0 0 0-.274-.036 9.804 9.804 0 0 1-.328.02'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMaximizeCircle);
export default ForwardRef;
