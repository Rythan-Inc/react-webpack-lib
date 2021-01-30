import * as singleSpa from "single-spa";

import exhibitPaneStyle from './index.css';

// This is only included to prevent single spa from giving a warning.
singleSpa.start();

const mapComponents = new WeakMap(); 

class AttachedComponent {
    constructor(domElementContainer, _promiseImport) {
        this._domElementContainer = domElementContainer;
        this._promiseImport = _promiseImport;
    }

    get container() {
        return this._domElementContainer;
    }

    get status() {

    }

    get importPromise() {
        return this._promiseImport;
    }

    onAttach() {
        // return a promise
        // if loading return this one.
        // if parcel mounting load that one
        // if unloading error.
    }

    unattach() {
        if (this.unattached)
            return this.unattached;

        let removeComponent = function() {
            if (this._attachedPane) {
                this._attachedPane.elementContainer.remove();
                delete this._attachedPane;
            }
            mapComponents.delete(this.container);
        }.bind(this);

        this.unattached = new Promise(function(resolve, reject) {
            if (this._parcel) {
                // Ensure it's mounted
                this._parcel.mountPromise.then(function() {
                    this._parcel.unmount().then(function(result) {
                        removeComponent();
                        resolve(result);
                    }, function(error) {
                        removeComponent();
                        reject(error);
                    });
                }.bind(this));

            }
        }.bind(this));

        return this.unattached;
    }
}
class Namespace {
    attachLoadingPane(domElementContainer, options) {
        const _options = options || {};
        const _loadingIcon = _options.loadingIcon || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA4CAYAAABNGP5yAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPDSURBVGiB7ZpfaFtVHMc/5+amSdPuTxtrR8TB6nSyB+fYEEHBl4qCCOKcY1MRxFKGoHus04fhi/hQKo750Kl0D3OD0BYUpwx8EdymXf/SbW7OKdqp3Z/UdEtvanLPz4fSQVmWe12TnJHez+O53xM+fDm/c0MbldrysFCluFrWNfWPniuWsSolc6cSFGBawDRBAaYFTLPkC7ABrLtWEd74mGmXkpE/O4b7+8++sjZAaPVaYu3vllWqkjg9nb4LWPIjEBRgWsA0QQGmBUwTFGBawDS2aYFy0rVh1+Obnnl6Q7FMVRdwdsW6DpD7i2WW/AgEBZgWKCfLa+24V6aq74DW++ob19bGCj77/o9ZJjNudRewbX2MUGJFwWdvHU0xmXGrewT8EBRgWsA0QQGmBUwTFGBawDRBAaYFTBMUYFrANEEBpgVMExRgWsA0S74AG0Bms+jJCc+w1ZQAq0BnotGX/iy53O0iM9d9Z22A/KmTpN941jO88sB3qLplN61n+3twPt/7PxTvHGyg20euFWhRNZGbHuRPD+Ec3iegJkC+BriwbM2auvUPPbl6udm/uKlYvWfGbuwdafcKpbZs/AJLtRCuWbAu6RSZrg6NFi0W2+LJkeMAmz45crKx1uLojubbda8Yvi5BQcdUTXThT2pFk/noHdFTly2QXfHk8PGyGJYZX2dUiYqpSHTBmpPsJjd6QilINvSO7CuLXQXwN6SKGHMnQAHkxwfIJrsF+EWsUFuhLU5O2DtwrWSiXjzVEuWBeBiAc1dzHByf+SmnJXur/OnLuRbA3y0lcOME6H+ukunqcJVIHuTFhuRgutAeJy8cGPP/Olos3/7mcPC5JurCiolrLl+dn3nQzz5/IzBfgGgyH76tdToVEtgZ7x0dLpQX4RWg8L9kyoAFz09Mu7s/OJbmvSdWErXVvHinaA4V2+v3PRWjJqqcQx+THx+wEDkc7xvdf6vwUFvijG/7UrBHhjff+9cjR847rY/eE2FVfWhuXXNlqC0xWGyrz6/CUute/FVl+z4T4Ew+lC8498bYo3RIh162FJfeP5aWv6+7c+tKar22ehYgW7eGQEVlegrQs0qr7XcnT1VuuH3yQ1vzpCu86uSErh+n51/ZnmPoWcCV2bEbH6JE7WzoHx5dhGdZGXo98Q1I55SjFYBSLP4EaMIxAIV82tA30rNoy3LjJnaDnADQYi2+gEjEigHjzr/2myXQKzuD7SpnWfZLQJpSjIC4Ie1a+oXEl4MzpRCsBAOvNV8A1abwvgSrms37L273yvwHhfIycd/yJ5kAAAAASUVORK5CYII=";
        const _loadingIconClass = exhibitPaneStyle[_options.loadingIconClass] || "";
        // We create a status pane here and show. This is used for loading and errors.
        let templateChartPane =
        `
        <div class="${exhibitPaneStyle['exhibit-pane']}">
            <div class="${exhibitPaneStyle['loading-status']}">
                <img class="${exhibitPaneStyle['loading-icon']}` + (_loadingIconClass ? ' ' + _loadingIconClass : '') + `" src="` + _loadingIcon + `">
            </div>
            <div class="${exhibitPaneStyle['component']}"></div>
        </div>
        `;

        let div = document.createElement('div');
        div.innerHTML = templateChartPane.trim();
        let domElement = div.firstChild;

        const elementComponent = div.getElementsByClassName(exhibitPaneStyle['component'])[0];
        const elementLoadingStatus = div.getElementsByClassName(exhibitPaneStyle['loading-status'])[0];
        const elementLoadingIcon = div.getElementsByClassName(exhibitPaneStyle['loading-icon'])[0];

        domElementContainer.append(domElement);
        return {
            elementContainer : domElement,
            elementComponent : elementComponent,
            elementLoadingStatus : elementLoadingStatus,
            elementLoadingIcon : elementLoadingIcon
        };
    }

    attachComponent(handlerResolve, optionsProps, optionsLoadingPane) {
        return new Promise((resolve, reject) => {
        if (!handlerResolve || !handlerResolve.container) {
           reject('domElement can not be empty');
           return;
        }

        let existing = mapComponents.get(handlerResolve.container);
        if (existing !== undefined) {
          resolve(existing);
          return
        }

        mapComponents.set(handlerResolve.container, handlerResolve);

        handlerResolve._attachedPane = this.attachLoadingPane(handlerResolve.container, optionsLoadingPane);

        let onRendered = function() {
            if (handlerResolve.unattached)
                return;
            handlerResolve._attachedPane.elementLoadingStatus.addEventListener('transitionend', () => {
                handlerResolve._attachedPane.elementLoadingStatus.remove();
              });
              handlerResolve._attachedPane.elementLoadingStatus.classList.add(exhibitPaneStyle['hidden']);
        }.bind(this);

        let optionsConfig = {
            domElement : handlerResolve._attachedPane.elementComponent
        }
        optionsConfig.properties = {...optionsProps};
        optionsConfig.properties = Object.assign(optionsConfig.properties, optionsLoadingPane.properties || {});

        if (optionsLoadingPane.customRendered)
            optionsConfig.properties[optionsLoadingPane.customRendered] = onRendered;

        handlerResolve.importPromise.then((parcelConfig) => {
            handlerResolve._parcel = singleSpa.mountRootParcel(parcelConfig, optionsConfig);
            if (handlerResolve.unattached) {
                resolve(handlerResolve);
            }
            handlerResolve._parcel.mountPromise.then(function() {
                if (!handlerResolve.unattached) {
                    if (!optionsLoadingPane.customRendered)
                        onRendered();
                }
                resolve(handlerResolve);
            });
          }).catch((error) => {
            let templateErrorPane =
            `
            <div class="${exhibitPaneStyle['loading-error']}">
                <p style="text-align: center">Loading Error</p>
                <br>
                <p>` + error + `</p>
            </div>
            `;

            let divError = document.createElement('div');
            divError.innerHTML = templateErrorPane.trim();
            let elementErrorPane = divError.firstChild;

            handlerResolve._attachedPane.elementLoadingIcon.remove();
            handlerResolve._attachedPane.elementLoadingStatus.append(elementErrorPane);

            reject(error);
          });
        });
    }

    attachDynamicComponent(domElementContainer, options) {
        const {
            properties,
            ...optionsLoadingPane
        } = options;

        const optionsProps = {...properties};

        return this.attachComponent(
            new AttachedComponent(
                domElementContainer,
                import('./dynamic/dynamic-component')
            ),
            optionsProps,
            optionsLoadingPane);
    }

}

export const namespace = new Namespace();
