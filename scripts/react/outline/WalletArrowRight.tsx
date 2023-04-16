import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.579 1.278c-2.04.188-3.76 1.683-4.198 3.65l-.066.3-.948.025c-1.025.026-1.457.089-1.991.29-1.589.597-2.703 1.914-3.043 3.597-.068.335-.073.668-.073 4.86s.005 4.525.073 4.86c.39 1.929 1.783 3.354 3.703 3.787.376.085.461.087 4.136.102 2.726.012 3.813.003 3.974-.03.68-.141.806-1.075.186-1.383-.145-.073-.33-.077-4.072-.096l-3.92-.02-.32-.11c-.538-.184-.878-.4-1.304-.826-.428-.428-.645-.771-.824-1.304-.101-.303-.108-.369-.123-1.267l-.016-.946 1.853-.017c1.774-.016 1.867-.021 2.154-.106a2.79 2.79 0 0 0 1.883-1.904 3.062 3.062 0 0 0 0-1.48 2.79 2.79 0 0 0-1.883-1.904c-.287-.085-.38-.09-2.154-.106l-1.853-.017.016-.946c.015-.898.022-.964.123-1.267.179-.533.396-.876.824-1.304.426-.426.766-.642 1.304-.826l.32-.11 7.949-.011 7.949-.01.011 4.23.011 4.231.093.149c.361.582 1.228.442 1.365-.221.033-.158.042-1.531.032-4.973-.014-4.719-.015-4.758-.102-5.139-.429-1.886-1.803-3.26-3.684-3.683-.375-.084-.463-.087-3.724-.095-1.837-.005-3.484.004-3.661.02M18.98 2.89c.539.185.878.4 1.304.826.404.405.613.722.784 1.194.051.139.092.271.092.292 0 .024-2.276.038-6.16.038-3.884 0-6.16-.014-6.16-.038 0-.09.196-.568.338-.824.207-.372.825-.992 1.194-1.196.15-.083.366-.187.48-.231.489-.187.481-.186 4.248-.178l3.56.007.32.11M6.454 12.841c.29.109.596.415.705.705.176.471.068.975-.285 1.328-.367.367-.359.366-2.376.366H2.76v-2.48h1.738c1.649 0 1.75.004 1.956.081m13.803 4.437a.72.72 0 0 0-.568.639c-.03.315.043.452.479.906l.399.414-2.393.012-2.394.011-.153.095a.714.714 0 0 0-.36.648c0 .2.019.267.116.405a.939.939 0 0 0 .277.248c.156.082.216.084 2.534.096l2.373.011-.399.414c-.436.454-.509.591-.479.906a.71.71 0 0 0 .728.648.844.844 0 0 0 .324-.063c.166-.087 1.627-1.569 1.758-1.783.156-.252.227-.532.227-.885s-.071-.633-.227-.885c-.124-.201-1.589-1.694-1.739-1.772a.82.82 0 0 0-.503-.065'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletArrowRight);
export default ForwardRef;