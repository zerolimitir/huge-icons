import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgReload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.697 1.276a.717.717 0 0 0-.568.658c-.015.185.016.299.267.963.156.415.284.758.284.762 0 .005-.147-.034-.328-.086-.85-.246-1.926-.356-2.881-.294-1.255.081-2.229.339-3.331.881a8.675 8.675 0 0 0-4.437 5.08 8.643 8.643 0 0 0 .006 5.536c.207.626.664 1.585.837 1.76a.748.748 0 0 0 1.247-.292c.08-.231.055-.337-.197-.849-.573-1.161-.783-1.966-.823-3.155-.085-2.552 1.123-4.894 3.247-6.291 1.274-.839 2.67-1.228 4.22-1.176 1.194.04 2.068.269 3.155.828.516.265.667.291.947.164.299-.136.498-.491.435-.778-.015-.07-.305-.856-.644-1.747-.627-1.645-.689-1.772-.934-1.9a.803.803 0 0 0-.502-.064m3.991 6.009c-.297.086-.567.516-.507.808.015.07.115.301.223.514.555 1.099.783 1.971.823 3.153.12 3.587-2.305 6.631-5.867 7.365-.402.083-.571.095-1.34.095-.92 0-1.099-.02-1.84-.209-.517-.132-.961-.303-1.575-.606-.543-.268-.677-.292-.947-.17-.299.136-.498.491-.435.778.015.07.305.856.644 1.747.653 1.713.689 1.783.993 1.924.217.1.367.095.602-.023a.687.687 0 0 0 .409-.595c.015-.185-.016-.299-.267-.963a49.94 49.94 0 0 1-.284-.764c0-.006.111.024.247.066.861.268 2.084.397 3.043.322 3.146-.248 5.843-2.059 7.227-4.851a8.747 8.747 0 0 0 .74-5.596c-.209-1.035-.823-2.542-1.153-2.831a.743.743 0 0 0-.736-.164'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReload);
export default ForwardRef;