import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWirelessCharging = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.571 7.038c-.183.045-.374.201-.677.555-1.455 1.702-1.971 3.943-1.412 6.134.254.996.812 2.019 1.541 2.824.394.435.679.537 1.039.374a.767.767 0 0 0 .437-.811c-.027-.159-.083-.24-.512-.742a4.74 4.74 0 0 1-.71-1.082c-.918-1.905-.604-4.202.789-5.761.402-.45.478-.625.407-.938a.744.744 0 0 0-.902-.553m8.469.008c-.57.166-.714.895-.259 1.314.059.055.22.244.357.42a5.041 5.041 0 0 1 1.102 3.218 5.139 5.139 0 0 1-1.319 3.487c-.305.34-.401.518-.4.733.001.183.109.448.225.55a.81.81 0 0 0 .852.113c.343-.175 1.03-1.074 1.422-1.861a6.347 6.347 0 0 0 .698-2.519c.146-1.796-.471-3.619-1.693-5.001-.375-.424-.651-.551-.985-.454'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWirelessCharging);
export default ForwardRef;
