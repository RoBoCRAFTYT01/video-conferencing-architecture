## ⚙️ Overview

In **software-based deployment**, Huawei Collaboration applications are installed as **software packages** on general-purpose servers provided by the **customer**.

This model gives flexibility and separates applications across multiple servers.

---

## 🖥️ Key Features

- Servers can be provided by the **customer** (not limited to Huawei hardware).
- Applications deployed on **different servers**:
    - **SMC (Service Management Center)**
    - **SC (Session Control)**
    - **CloudMCU**
    - **CloudRSE**
- **KylinOS** is used as the base operating system (installed directly on the server).
- **Software packages** are uploaded to the OS home directory (`/home`) and installed manually.

---

## 📦 Deployment Characteristics

- Each major component runs on a **dedicated server**.
- More flexible than bare metal, since customer hardware can be used.
- Applications delivered as **SW packages**, not pre-installed images.
- **Manual installation** required for setup.

---

## 📊 Comparison vs Bare Metal

| Aspect | Bare Metal | Software-Based Deployment |
| --- | --- | --- |
| **Hardware** | Huawei-provided server | Customer-provided server (x86) |
| **Apps Delivery** | Pre-installed / image-based | Software packages installed manually |
| **OS** | CulerOS | KylinOS |
| **Deployment** | Faster, preloaded | Slower, manual upload + install |
| **App Separation** | Multiple apps can share server | Apps deployed on separate servers |

---

✅ **Key Point**:

Software-based deployment = **customer-provided servers, KylinOS installed, apps deployed separately via software packages**.